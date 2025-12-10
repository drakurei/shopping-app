<?php
require_once __DIR__ . '/config.php';

$pdo = db();
$stmt = $pdo->query('SELECT id, name, description, price, image FROM products ORDER BY name');
$products = $stmt->fetchAll();
$pageTitle = 'Shop Products';

include __DIR__ . '/includes/header.php';
?>

<section>
    <h2>Fresh Groceries</h2>
    <p>Browse our catalog and add items to your cart.</p>
    <?php if (!is_logged_in()): ?>
        <p class="auth-note">Login or create an account to start shopping.</p>
    <?php endif; ?>
    <?php if (!$products): ?>
        <p>No products have been added yet.</p>
    <?php else: ?>
        <div class="card-grid">
            <?php foreach ($products as $product): ?>
                <?php $image = $product['image'] ?: 'assets/default-product.svg'; ?>
                <article class="card">
                    <div class="product-thumb">
                        <img src="<?= htmlspecialchars($image); ?>" alt="<?= htmlspecialchars($product['name']); ?> image">
                    </div>
                    <h3><?= htmlspecialchars($product['name']); ?></h3>
                    <p><?= htmlspecialchars($product['description']); ?></p>
                    <div class="price">$<?= number_format((float) $product['price'], 2); ?></div>
                    <form action="cart.php?action=add" method="post">
                        <input type="hidden" name="product_id" value="<?= (int) $product['id']; ?>">
                        <label for="qty-<?= (int) $product['id']; ?>">Quantity</label>
                        <input type="number" id="qty-<?= (int) $product['id']; ?>" name="quantity" min="1" value="1" <?php if (!is_logged_in()) echo 'disabled'; ?>>
                        <button type="submit" class="btn btn-primary" <?php if (!is_logged_in()) echo 'disabled'; ?>>Add to Cart</button>
                    </form>
                </article>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
