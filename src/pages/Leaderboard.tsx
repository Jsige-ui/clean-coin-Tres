
import LeaderboardCard from "@/components/LeaderboardCard";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { topUsers } from "@/lib/mockData";

const Leaderboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Community Leaderboard</h1>
            <div className="flex gap-2">
              <Button variant="outline">This Week</Button>
              <Button variant="outline">This Month</Button>
              <Button variant="outline">All Time</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topUsers.map((user, index) => (
              <div 
                key={user.id}
                className="border rounded-lg p-4 shadow-sm bg-card"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center font-bold text-2xl">
                    #{index + 1}
                  </div>
                  
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img 
                      src={user.avatar}
                      alt={user.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="font-semibold">{user.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {user.issuesReported} issues, {user.issuesResolved} resolved
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-lg font-bold">{user.tokens}</div>
                    <div className="text-xs text-muted-foreground">CleanCoins</div>
                  </div>
                </div>
              </div>
            ))}
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

export default Leaderboard;
