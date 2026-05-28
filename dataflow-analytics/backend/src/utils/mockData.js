// src/utils/mockData.js

const generateMockData = () => {
  const orders = [];
  const categories = ['Electronics', 'Clothing', 'Home', 'Beauty', 'Sports'];
  const statuses = ['completed', 'completed', 'completed', 'completed', 'pending', 'cancelled'];
  
  // Generate data for the past 60 days
  const now = new Date();
  
  for (let i = 0; i < 1000; i++) {
    const daysAgo = Math.floor(Math.random() * 60);
    const date = new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000);
    
    // Add some variance to time
    date.setHours(Math.floor(Math.random() * 24));
    date.setMinutes(Math.floor(Math.random() * 60));

    const category = categories[Math.floor(Math.random() * categories.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    
    // Base amount depending on category
    let amount = 0;
    if (category === 'Electronics') amount = 100 + Math.random() * 900;
    else if (category === 'Clothing') amount = 20 + Math.random() * 100;
    else if (category === 'Home') amount = 50 + Math.random() * 300;
    else amount = 10 + Math.random() * 80;

    orders.push({
      id: `ORD-${10000 + i}`,
      date: date.toISOString(),
      amount: parseFloat(amount.toFixed(2)),
      category,
      status,
      customerId: `CUST-${Math.floor(Math.random() * 500)}`,
      productId: `PROD-${Math.floor(Math.random() * 100)}`
    });
  }
  
  return orders.sort((a, b) => new Date(b.date) - new Date(a.date));
};

const orders = generateMockData();

module.exports = {
  orders
};
