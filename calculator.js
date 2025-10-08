// calculator.js

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Получение элементов DOM
    const productSelect = document.getElementById('product');
    const quantityInput = document.getElementById('quantity');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('quantityError');
    
    // Регулярное выражение для проверки ввода (только положительные целые числа)
    const quantityRegex = /^[1-9]\d*$/;
    
    // Функция для проверки корректности ввода
    function validateQuantity() {
        const quantity = quantityInput.value.trim();
        
        if (!quantityRegex.test(quantity)) {
            errorDiv.textContent = 'Введите корректное количество (положительное целое число)';
            errorDiv.style.display = 'block';
            return false;
        } else {
            errorDiv.style.display = 'none';
            return true;
        }
    }
    
    // Функция для расчета стоимости заказа
    function calculateOrderCost() {
        // Проверка корректности ввода
        if (!validateQuantity()) {
            resultDiv.style.display = 'none';
            return;
        }
        
        // Получение цены товара и количества
        const price = parseInt(productSelect.value);
        const quantity = parseInt(quantityInput.value);
        
        // Расчет общей стоимости
        const totalCost = price * quantity;
        
        // Отображение результата
        resultDiv.innerHTML = `
            <h3>Результат расчета:</h3>
            <p>Товар: ${productSelect.options[productSelect.selectedIndex].text}</p>
            <p>Количество: ${quantity}</p>
            <p><strong>Общая стоимость: ${totalCost} руб.</strong></p>
        `;
        resultDiv.style.display = 'block';
    }
    
    // Назначение обработчиков событий
    calculateBtn.addEventListener('click', calculateOrderCost);
    
    // Валидация при вводе
    quantityInput.addEventListener('input', function() {
        validateQuantity();
    });
});