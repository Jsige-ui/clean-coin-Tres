import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IssueCard from "@/components/IssueCard";
import BlockchainVisualizer from "@/components/BlockchainVisualizer";
import LeaderboardCard from "@/components/LeaderboardCard";
import { recentIssues, localities } from "@/lib/mockData";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Database, Star, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  // Filter issues based on active tab
  const filteredIssues = activeTab === "all" 
    ? recentIssues 
    : recentIssues.filter(issue => 
        activeTab === "resolved" 
          ? issue.status === "Resolved" 
          : issue.status !== "Resolved"
      );
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-6">
          {/* Hero Section */}
          <Hero />
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            <Card>
              <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                <h3 className="font-medium text-sm">Total Issues</h3>
                <Database className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {localities.reduce((acc, l) => acc + l.totalIssues, 0)}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Across all neighborhoods
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                <h3 className="font-medium text-sm">Resolution Rate</h3>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {Math.round(localities.reduce((acc, l) => acc + l.resolvedIssues, 0) / localities.reduce((acc, l) => acc + l.totalIssues, 0) * 100)}%
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  +5% from last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                <h3 className="font-medium text-sm">Active Users</h3>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {localities.reduce((acc, l) => acc + l.activeUsers, 0)}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Community members
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                <h3 className="font-medium text-sm">Cleanest Area</h3>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {localities.sort((a, b) => (b.resolvedIssues / b.totalIssues) - (a.resolvedIssues / a.totalIssues))[0].name}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Based on resolution rate
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Issues */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Community Issues</h2>
                <Tabs defaultValue="all" className="w-auto" onValueChange={setActiveTab}>
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="active">Active</TabsTrigger>
                    <TabsTrigger value="resolved">Resolved</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredIssues.map(issue => (
                  <IssueCard key={issue.id} issue={issue} />
                ))}
              </div>
              
              <div className="flex justify-center">
                <Button variant="outline" asChild>
                  <Link to="/issues">View All Issues</Link>
                </Button>
              </div>
            </div>
            
            {/* Right Column - Blockchain & Leaderboard */}
            <div className="space-y-6">
              <BlockchainVisualizer />
              <LeaderboardCard />
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CleanCoin. Decentralized waste management on blockchain.
          </div>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
