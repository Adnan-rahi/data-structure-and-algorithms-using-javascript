function calculateTotalSalesWithTax(products, taxRates) {

    const totalSales = products.reduce((sum, product) => sum + product.price * product.quantity, 0)

    const taxAmount = (totalSales * taxRates) / 100;

    const totalSalesWithTax = totalSales + taxAmount

    return parseFloat(totalSalesWithTax.toFixed(2))
}

module.exports = calculateTotalSalesWithTax;
