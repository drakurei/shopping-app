<?php
require_once __DIR__ . '/config.php';

require_login();

$pdo = db();
$userId = (int) $_SESSION['user_id'];
$action = $_GET['action'] ?? 'view';

if ($action === 'add' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $productId = (int) ($_POST['product_id'] ?? 0);
    $quantity = max(1, (int) ($_POST['quantity'] ?? 1));

    $product = $pdo->prepare('SELECT id FROM products WHERE id = ?');
    $product->execute([$productId]);
    if (!$product->fetch()) {
        set_flash('error', 'Product not found.');
        redirect('index.php');
    }

    $stmt = $pdo->prepare('INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)');
    $stmt->execute([$userId, $productId, $quantity]);
    set_flash('success', 'Item added to your cart.');
    redirect('cart.php');
}

if ($action === 'update' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $productId = (int) ($_POST['product_id'] ?? 0);
    $quantity = max(1, (int) ($_POST['quantity'] ?? 1));

    $stmt = $pdo->prepare('UPDATE cart_items SET quantity = ? WHERE user_id = ? AND product_id = ?');
    $stmt->execute([$quantity, $userId, $productId]);
    set_flash('success', 'Cart updated.');
    redirect('cart.php');
}

if ($action === 'remove' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $productId = (int) ($_POST['product_id'] ?? 0);
    $stmt = $pdo->prepare('DELETE FROM cart_items WHERE user_id = ? AND product_id = ?');
    $stmt->execute([$userId, $productId]);
    set_flash('success', 'Item removed from cart.');
    redirect('cart.php');
}

$itemsStmt = $pdo->prepare('SELECT ci.product_id, ci.quantity, p.name, p.price FROM cart_items ci JOIN products p ON ci.product_id = p.id WHERE ci.user_id = ? ORDER BY p.name');
$itemsStmt->execute([$userId]);
$items = $itemsStmt->fetchAll();

$total = 0;
foreach ($items as $item) {
    $total += $item['quantity'] * $item['price'];
}

$pageTitle = 'Your Cart';
include __DIR__ . '/includes/header.php';
?>

<section class="cart-wrapper">
    <h2>Your Cart</h2>
    <?php if (!$items): ?>
        <p class="cart-empty">Your cart is empty. <a href="index.php">Browse products</a>.</p>
    <?php else: ?>
        <table class="cart-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($items as $item): ?>
                    <tr>
                        <td><?= htmlspecialchars($item['name']); ?></td>
                        <td>$<?= number_format((float) $item['price'], 2); ?></td>
                        <td>
                            <form action="cart.php?action=update" method="post" class="cart-form">
                                <input type="hidden" name="product_id" value="<?= (int) $item['product_id']; ?>">
                                <input type="number" name="quantity" min="1" value="<?= (int) $item['quantity']; ?>" data-quantity-input>
                                <button type="submit" class="btn btn-secondary btn-small">Update</button>
                            </form>
                        </td>
                        <td>$<?= number_format($item['quantity'] * $item['price'], 2); ?></td>
                        <td>
                            <form action="cart.php?action=remove" method="post">
                                <input type="hidden" name="product_id" value="<?= (int) $item['product_id']; ?>">
                                <button type="submit" class="btn btn-danger" data-confirm-remove>Remove</button>
                            </form>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
        <div class="cart-total">
            <strong>Total: $<?= number_format($total, 2); ?></strong>
        </div>
    <?php endif; ?>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
