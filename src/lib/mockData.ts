
// Mock data for the waste management app

export interface User {
  id: string;
  name: string;
  avatar: string;
  tokens: number;
  pointsThisMonth: number;
  issuesReported: number;
  issuesResolved: number;
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  location: string;
  category: 'Garbage' | 'Recycling' | 'Hazardous' | 'Green Waste' | 'Other';
  reportedBy: string;
  reportedAt: string;
  status: 'Reported' | 'Under Review' | 'In Progress' | 'Resolved' | 'Cancelled';
  votes: number;
  images: string[];
  blockchainHash: string;
}

export interface BlockchainTransaction {
  id: string;
  type: 'Issue Report' | 'Vote' | 'Resolution' | 'Token Award' | 'Token Redemption';
  from: string;
  to: string;
  timestamp: string;
  hash: string;
  details: string;
}

export interface LocalityStats {
  name: string;
  totalIssues: number;
  resolvedIssues: number;
  activeUsers: number;
  averageResolutionTime: number; // in hours
}

// Current user (mock logged in user)
export const currentUser: User = {
  id: 'user-123',
  name: 'Alex Johnson',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
  tokens: 156,
  pointsThisMonth: 320,
  issuesReported: 8,
  issuesResolved: 6
};

// Sample users for leaderboard
export const topUsers: User[] = [
  {
    id: 'user-456',
    name: 'Sam Rivera',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sam',
    tokens: 342,
    pointsThisMonth: 520,
    issuesReported: 15,
    issuesResolved: 12
  },
  {
    id: 'user-789',
    name: 'Taylor Kim',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Taylor',
    tokens: 289,
    pointsThisMonth: 480,
    issuesReported: 12,
    issuesResolved: 10
  },
  {
    id: 'user-101',
    name: 'Jamie Smith',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie',
    tokens: 265,
    pointsThisMonth: 410,
    issuesReported: 9,
    issuesResolved: 9
  },
  currentUser,
  {
    id: 'user-102',
    name: 'Jordan Lee',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan',
    tokens: 142,
    pointsThisMonth: 290,
    issuesReported: 6,
    issuesResolved: 4
  }
];

// Sample issues
export const recentIssues: Issue[] = [
  {
    id: 'issue-001',
    title: 'Overflowing dumpster at Camden Apartments',
    description: 'The dumpster has not been emptied for two weeks and is now overflowing onto the sidewalk.',
    location: '123 Camden St, Area 5',
    category: 'Garbage',
    reportedBy: 'Sam Rivera',
    reportedAt: '2023-04-25T08:30:00Z',
    status: 'In Progress',
    votes: 23,
    images: ['https://images.unsplash.com/photo-1567374783966-0981f7d167b5?auto=format&fit=crop&w=800&q=80'],
    blockchainHash: '0x7f9c1e651e0532b3b23de31b1a18de7728ba14c1d34d51b19bb0ad0630319224'
  },
  {
    id: 'issue-002',
    title: 'Scattered recyclables on Main Street',
    description: 'Recycling containers were knocked over during the storm and contents are scattered across three blocks.',
    location: 'Main St between 5th and 8th Ave',
    category: 'Recycling',
    reportedBy: 'Jamie Smith',
    reportedAt: '2023-04-26T14:15:00Z',
    status: 'Reported',
    votes: 15,
    images: ['https://images.unsplash.com/photo-1582408921715-18e7355dac4d?auto=format&fit=crop&w=800&q=80'],
    blockchainHash: '0x8a2c1e651e0532b3b23de31b1a18de7728ba14c1d34d51b19bb0ad0630319225'
  },
  {
    id: 'issue-003',
    title: 'Abandoned electronics pile',
    description: 'Someone has dumped old computers and TV equipment in the community park.',
    location: 'Riverside Park, near east entrance',
    category: 'Hazardous',
    reportedBy: 'Alex Johnson',
    reportedAt: '2023-04-27T10:45:00Z',
    status: 'Under Review',
    votes: 18,
    images: ['https://images.unsplash.com/photo-1540664321987-849e0ea9fc4f?auto=format&fit=crop&w=800&q=80'],
    blockchainHash: '0x9b3c1e651e0532b3b23de31b1a18de7728ba14c1d34d51b19bb0ad0630319226'
  },
  {
    id: 'issue-004',
    title: 'Yard waste blocking drainage',
    description: 'Lawn clippings and branches are clogging the storm drain after recent landscaping.',
    location: '45 Oak Avenue',
    category: 'Green Waste',
    reportedBy: 'Taylor Kim',
    reportedAt: '2023-04-27T16:20:00Z',
    status: 'Reported',
    votes: 7,
    images: ['https://images.unsplash.com/photo-1504194104404-433180773017?auto=format&fit=crop&w=800&q=80'],
    blockchainHash: '0xa4c1e651e0532b3b23de31b1a18de7728ba14c1d34d51b19bb0ad0630319227'
  },
  {
    id: 'issue-005',
    title: 'Broken glass at playground',
    description: 'Broken bottles scattered around the playground area creating a safety hazard for children.',
    location: 'Sunshine Kids Playground, Central Park',
    category: 'Hazardous',
    reportedBy: 'Jordan Lee',
    reportedAt: '2023-04-28T09:10:00Z',
    status: 'Resolved',
    votes: 31,
    images: ['https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80'],
    blockchainHash: '0xb5c1e651e0532b3b23de31b1a18de7728ba14c1d34d51b19bb0ad0630319228'
  }
];

// Sample blockchain transactions
export const recentTransactions: BlockchainTransaction[] = [
  {
    id: 'tx-001',
    type: 'Issue Report',
    from: 'Sam Rivera',
    to: 'System',
    timestamp: '2023-04-25T08:30:00Z',
    hash: '0x7f9c1e651e0532b3b23de31b1a18de7728ba14c1d34d51b19bb0ad0630319224',
    details: 'Reported issue: Overflowing dumpster at Camden Apartments'
  },
  {
    id: 'tx-002',
    type: 'Vote',
    from: 'Taylor Kim',
    to: 'Issue-001',
    timestamp: '2023-04-25T09:15:00Z',
    hash: '0x8a2c1e651e0532b3b23de31b1a18de7728ba14c1d34d51b19bb0ad0630319225',
    details: 'Voted on issue: Overflowing dumpster at Camden Apartments'
  },
  {
    id: 'tx-003',
    type: 'Token Award',
    from: 'System',
    to: 'Sam Rivera',
    timestamp: '2023-04-25T08:35:00Z',
    hash: '0x9b3c1e651e0532b3b23de31b1a18de7728ba14c1d34d51b19bb0ad0630319226',
    details: 'Awarded 10 CleanCoins for reporting issue'
  },
  {
    id: 'tx-004',
    type: 'Issue Report',
    from: 'Jamie Smith',
    to: 'System',
    timestamp: '2023-04-26T14:15:00Z',
    hash: '0xa4c1e651e0532b3b23de31b1a18de7728ba14c1d34d51b19bb0ad0630319227',
    details: 'Reported issue: Scattered recyclables on Main Street'
  },
  {
    id: 'tx-005',
    type: 'Resolution',
    from: 'Municipal Worker',
    to: 'Issue-005',
    timestamp: '2023-04-28T15:30:00Z',
    hash: '0xb5c1e651e0532b3b23de31b1a18de7728ba14c1d34d51b19bb0ad0630319228',
    details: 'Resolved issue: Broken glass at playground'
  },
  {
    id: 'tx-006',
    type: 'Token Redemption',
    from: 'Jordan Lee',
    to: 'Local Cafe',
    timestamp: '2023-04-28T16:45:00Z',
    hash: '0xc6c1e651e0532b3b23de31b1a18de7728ba14c1d34d51b19bb0ad0630319229',
    details: 'Redeemed 50 CleanCoins for 25% discount'
  }
];

// Sample locality statistics
export const localities: LocalityStats[] = [
  {
    name: 'Downtown',
    totalIssues: 57,
    resolvedIssues: 42,
    activeUsers: 98,
    averageResolutionTime: 16.5
  },
  {
    name: 'Westside',
    totalIssues: 43,
    resolvedIssues: 38,
    activeUsers: 72,
    averageResolutionTime: 14.2
  },
  {
    name: 'North Hills',
    totalIssues: 29,
    resolvedIssues: 24,
    activeUsers: 56,
    averageResolutionTime: 18.7
  },
  {
    name: 'Riverside',
    totalIssues: 35,
    resolvedIssues: 31,
    activeUsers: 64,
    averageResolutionTime: 13.1
  },
  {
    name: 'Central Park',
    totalIssues: 21,
    resolvedIssues: 18,
    activeUsers: 47,
    averageResolutionTime: 15.8
  }
];
