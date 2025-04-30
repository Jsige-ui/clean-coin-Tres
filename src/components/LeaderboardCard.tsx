
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { topUsers } from '@/lib/mockData';
import { Star } from "lucide-react";

const LeaderboardCard = () => {
  // Sort users by points this month
  const sortedUsers = [...topUsers].sort((a, b) => b.pointsThisMonth - a.pointsThisMonth);
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Community Leaders</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-xs text-muted-foreground mb-4">
          Top contributors this month
        </div>
        
        <div className="space-y-2">
          {sortedUsers.slice(0, 5).map((user, index) => (
            <div 
              key={user.id} 
              className={`flex items-center gap-3 p-2 rounded-lg ${index === 0 ? 'bg-amber-50' : index === 1 ? 'bg-gray-50' : index === 2 ? 'bg-amber-50/50' : ''}`}
            >
              <div className="w-6 font-bold text-center">
                {index === 0 ? (
                  <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                ) : (
                  <span className={index === 1 ? 'text-gray-600' : index === 2 ? 'text-amber-600' : ''}>
                    {index + 1}
                  </span>
                )}
              </div>
              
              <div className="h-8 w-8 rounded-full overflow-hidden">
                <img 
                  src={user.avatar}
                  alt={user.name}
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="font-medium text-sm">{user.name}</div>
                <div className="text-xs text-muted-foreground">
                  {user.issuesReported} issues, {user.issuesResolved} resolved
                </div>
              </div>
              
              <div className="text-right">
                <div className="font-bold text-sm">{user.pointsThisMonth}</div>
                <div className="text-xs text-muted-foreground">points</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderboardCard;
