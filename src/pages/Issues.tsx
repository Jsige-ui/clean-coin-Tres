
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IssueCard from "@/components/IssueCard";
import { recentIssues } from "@/lib/mockData";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Issues = () => {
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
        <div className="container py-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Community Issues</h1>
            <Tabs defaultValue="all" className="w-auto" onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="resolved">Resolved</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIssues.map(issue => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
          </div>
          
          {filteredIssues.length > 0 && (
            <div className="flex justify-center mt-8">
              <Button variant="outline">Load More</Button>
            </div>
          )}
          
          {filteredIssues.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No issues found for the selected filter.</p>
            </div>
          )}
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

export default Issues;
