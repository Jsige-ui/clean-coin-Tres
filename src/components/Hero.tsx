
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ReportIssueModal from "./ReportIssueModal";
import TokenDisplay from "./TokenDisplay";
import { currentUser } from "@/lib/mockData";
import { ArrowUp, Check, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-eco-green-50 to-clean-blue-50 py-12 md:py-16 px-4 rounded-xl overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-eco-green-200/30 animate-float" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute top-1/2 -left-8 w-16 h-16 rounded-full bg-clean-blue-200/30 animate-float" style={{ animationDelay: "0.8s" }}></div>
        <div className="absolute -bottom-4 right-1/4 w-20 h-20 rounded-full bg-blockchain-200/30 animate-float" style={{ animationDelay: "1.2s" }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Decentralized Waste Management 
            <span className="bg-gradient-to-r from-eco-green-600 to-clean-blue-600 bg-clip-text text-transparent">
              {" "}on the Blockchain
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Join the community movement for cleaner neighborhoods, transparent governance, and sustainable waste management
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2 px-6">
                  <Plus className="h-5 w-5" />
                  Report an Issue
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <ReportIssueModal />
              </DialogContent>
            </Dialog>
            
            <Button size="lg" variant="outline" className="gap-2 px-6" asChild>
              <Link to="/issues">
                <ArrowUp className="h-5 w-5" />
                Vote on Issues
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <div className="h-5 w-5 rounded-full bg-eco-green-100 flex items-center justify-center">
                <Check className="h-3 w-3 text-eco-green-700" />
              </div>
              <span>Blockchain Transparency</span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <div className="h-5 w-5 rounded-full bg-eco-green-100 flex items-center justify-center">
                <Check className="h-3 w-3 text-eco-green-700" />
              </div>
              <span>Community Voting</span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <div className="h-5 w-5 rounded-full bg-eco-green-100 flex items-center justify-center">
                <Check className="h-3 w-3 text-eco-green-700" />
              </div>
              <span>Token Rewards</span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <TokenDisplay tokens={currentUser.tokens} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
