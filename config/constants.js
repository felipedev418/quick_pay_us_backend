module.exports = {
  DEFAULT_REFERRAL_FIELDS: {
    investmentLevel: 1,
    username: 1,
    firstName: 1,
    lastName: 1,
    depositBalance: 1,
    createdAt: 1,
    investmentSubLevel: 1,
  },
  ANALYTICS_TYPE: {
    PROFIT: "profits",
    CREDIT: "credits",
    REWARD: "rewards",
  },
  DOCUMENT_TYPES: {
    ID_CARD: "ID_CARD",
    PASSPORT: "PASSPORT",
    LICENSE: "LICENSE",
  },
  STATUS: {
    APPROVED: "APPROVED",
    REJECTED: "REJECTED",
    PENDING: "PENDING",
  },
  TRANSACTION_TYPES: {
    WITHDRAWAL: "WITHDRAWAL",
    DEPOSIT: "DEPOSIT",
    PROFIT: "PROFIT",
    REWARD: "REWARD",
    REFERRAL_CREDIT: "REFERRAL_CREDIT",
  },
  WITHDRAWAL_TYPES: {
    DEPOSIT: "DEPOSIT",
    PROFIT: "PROFIT",
    REWARD: "REWARD",
  },
  DEFAULT_FEE_AMOUNT: 0.05,
  MINIMUM_WITHDRAWAL_AMOUNT: 10,
  NOTIFICATION_TYPES: {
    GENERAL: "GENERAL",
    ACTIVITY: "ACTIVITY",
    IMPORTANT: "IMPORTANT",
  },
  RANK_CONFIG: [
    {
      title: "Leader 1",
      rewardFrom: 300,
      rewardTo: 500,
      requiredSalesFrom: 10000,
      requiredSalesTo: 15000,
      weeklyMeetings: 5,
      directReferralsRequired: 25,
    },
    {
      title: "Leader 2",
      rewardFrom: 750,
      rewardTo: 1500,
      requiredSalesFrom: 30000,
      requiredSalesTo: 50000,
      weeklyMeetings: 5,
      directReferralsRequired: 25,
    },
    {
      title: "Leader 3",
      rewardFrom: 2000,
      rewardTo: 2500,
      requiredSalesFrom: 750000,
      requiredSalesTo: 100000,
      weeklyMeetings: 4,
      directReferralsRequired: 50,
    },
    {
      title: "Leader 4",
      rewardFrom: 3000,
      rewardTo: 7500,
      requiredSalesFrom: 150000,
      requiredSalesTo: 300000,
      weeklyMeetings: 4,
      directReferralsRequired: 50,
    },
    {
      title: "Leader 5",
      rewardFrom: 10000,
      rewardTo: 20000,
      requiredSalesFrom: 500000,
      requiredSalesTo: 1000000,
      weeklyMeetings: 3,
      directReferralsRequired: 100,
    },
  ],
  ALLOWED_ROUTES: [
    {
      TITLE: "Create User",
      ROUTE: [
        {
          PATH: "/api/v1/admin/profile",
          METHOD: "POST"
        },
      ]
    },
    {
      TITLE: "Edit User",
      ROUTE: [
        {
          PATH: "/api/v1/admin/profile",
          METHOD: "PUT"
        },
      ]
    },
    {
      TITLE: "Delete User",
      ROUTE: [
        {
          PATH: "/api/v1/admin/profile",
          METHOD: "DELETE"
        },
      ]
    },
    {
      TITLE: "View Dashboard",
      ROUTE: [
        {
          PATH: "/api/v1/admin/analytics",
          METHOD: "GET"
        },
      ]
    },
    {
      TITLE: "Manage Content",
      ROUTE: [
      ]
    }
  ]
};
