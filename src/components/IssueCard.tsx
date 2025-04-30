
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Issue } from '@/lib/mockData';
import { Calendar, MapPin, Heart, MessageSquare, CheckCircle, ThumbsUp } from "lucide-react";
import { toast } from "sonner";

interface IssueCardProps {
  issue: Issue;
}

const IssueCard = ({ issue }: IssueCardProps) => {
  const [votes, setVotes] = useState(issue.votes);
  const [hasVoted, setHasVoted] = useState(false);
  
  // Get progress percentage based on status
  const getProgressPercentage = () => {
    switch (issue.status) {
      case 'Reported': return 25;
      case 'Under Review': return 50;
      case 'In Progress': return 75;
      case 'Resolved': return 100;
      case 'Cancelled': return 0;
      default: return 0;
    }
  };

  // Time ago format
  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const pastDate = new Date(dateString);
    const diff = now.getTime() - pastDate.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return `${minutes}m ago`;
  };
  
  // Status color mapping
  const getStatusColor = () => {
    switch (issue.status) {
      case 'Reported': return 'bg-amber-100 text-amber-800';
      case 'Under Review': return 'bg-blue-100 text-blue-800';
      case 'In Progress': return 'bg-purple-100 text-purple-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  // Category icon mapping
  const getCategoryIcon = () => {
    switch (issue.category) {
      case 'Garbage': return '🗑️';
      case 'Recycling': return '♻️';
      case 'Hazardous': return '⚠️';
      case 'Green Waste': return '🌿';
      default: return '📦';
    }
  };
  
  const handleVote = () => {
    if (!hasVoted) {
      setVotes(votes + 1);
      setHasVoted(true);
      toast.success("Vote cast successfully!", {
        description: "Your vote has been recorded on the blockchain",
      });
    } else {
      setVotes(votes - 1);
      setHasVoted(false);
      toast.info("Vote removed", {
        description: "Your vote has been removed from this issue",
      });
    }
  };
  
  return (
    <Card className="overflow-hidden">
      {issue.images.length > 0 && (
        <div className="relative w-full h-48 overflow-hidden">
          <img 
            src={issue.images[0]} 
            alt={issue.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-2 right-2">
            <Badge className={getStatusColor()}>{issue.status}</Badge>
          </div>
        </div>
      )}
      
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="px-2 py-0">
                <span className="mr-1">{getCategoryIcon()}</span>
                {issue.category}
              </Badge>
            </div>
            <h3 className="font-semibold text-lg leading-tight">{issue.title}</h3>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex items-center justify-between mb-1 text-xs text-muted-foreground">
            <span>Progress</span>
            <span>{getProgressPercentage()}%</span>
          </div>
          <Progress value={getProgressPercentage()} className="h-1" />
        </div>
      </CardHeader>
      
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
          {issue.description}
        </p>
        
        <div className="flex items-center text-xs text-muted-foreground mb-1">
          <MapPin className="h-3 w-3 mr-1" />
          <span>{issue.location}</span>
        </div>
        
        <div className="flex items-center text-xs text-muted-foreground">
          <Calendar className="h-3 w-3 mr-1" />
          <span>Reported {getTimeAgo(issue.reportedAt)} by {issue.reportedBy}</span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`gap-1 ${hasVoted ? 'text-primary' : ''}`}
            onClick={handleVote}
          >
            <ThumbsUp className="h-4 w-4" fill={hasVoted ? "currentColor" : "none"} />
            <span>{votes}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="gap-1">
            <MessageSquare className="h-4 w-4" />
            {Math.floor(Math.random() * 10)}
          </Button>
        </div>
        
        {issue.status === 'Resolved' && (
          <div className="flex items-center text-xs text-green-600 font-medium">
            <CheckCircle className="h-3 w-3 mr-1" />
            Resolved
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default IssueCard;
