// js/quick-add.js - Quick add functionality for shopping lists

/**
 * Initialize quick add functionality
 */
function initQuickAdd() {
    const form = document.getElementById('quick-add-form');
    const listSelect = document.getElementById('quick-list-select');

    if (form) {
        form.addEventListener('submit', handleQuickAdd);
    }

    // Populate list select when lists are loaded
    populateListSelect();
}

/**
 * Populate the list select dropdown
 */
async function populateListSelect() {
    const listSelect = document.getElementById('quick-list-select');
    if (!listSelect) return;

    try {
        const response = await fetch(LANG.API_BASE + LANG.API_LISTS, {
            credentials: 'include'
        });
        const data = await response.json();

        listSelect.innerHTML = '<option value="">Select a list...</option>';

        if (data.lists && data.lists.length > 0) {
            data.lists.forEach(list => {
                const option = document.createElement('option');
                option.value = list.id;
                option.textContent = list.name;
                listSelect.appendChild(option);
            });
        }
    } catch (error) {
        console.error('Failed to load lists for quick add:', error);
    }
}

/**
 * Handle quick add form submission
 * @param {Event} event - The form submit event
 */
async function handleQuickAdd(event) {
    event.preventDefault();

    const itemName = document.getElementById('quick-item-name').value.trim();
    const category = document.getElementById('quick-item-category').value.trim();
    const quantity = parseInt(document.getElementById('quick-item-quantity').value) || 1;
    const listId = document.getElementById('quick-list-select').value;

    if (!itemName) {
        showMessage('Please enter an item name.');
        return;
    }

    if (!listId) {
        showMessage('Please select a list.');
        return;
    }

    try {
        const response = await fetch(LANG.API_BASE + LANG.API_LISTS, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ list_id: parseInt(listId), name: itemName, category: category || '', quantity })
        });

        const data = await response.json();

        if (data.success) {
            // Clear form
            document.getElementById('quick-item-name').value = '';
            document.getElementById('quick-item-category').value = '';
            document.getElementById('quick-item-quantity').value = '1';

            // Refresh lists
            app.loadLists();
        } else {
            showMessage(data.error || 'Failed to add item.');
        }
    } catch (error) {
        showMessage('Error adding item. Please try again.');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initQuickAdd);