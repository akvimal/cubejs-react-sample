cube(`DailyData`, {
  sql: `SELECT * FROM public."DailyData"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt, updatedAt, tradeDate]
    },
    
    qty: {
      sql: `qty`,
      type: `sum`
    },
    
    value: {
      sql: `value`,
      type: `sum`
    },
    
    total: {
      sql: `total`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    symbol: {
      sql: `symbol`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    },
    
    tradeDate: {
      sql: `trade_date`,
      type: `time`
    }
  }
});
