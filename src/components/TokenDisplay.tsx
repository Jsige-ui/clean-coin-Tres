
import { Coins } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TokenDisplayProps {
  tokens: number;
}

const TokenDisplay = ({ tokens }: TokenDisplayProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-1 bg-amber-100 text-amber-800 px-2 py-1 rounded-full cursor-help">
            <Coins className="h-4 w-4 text-amber-500" />
            <span className="font-medium">{tokens}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">You have {tokens} CleanCoins</p>
          <p className="text-xs text-muted-foreground">Use them for rewards or community projects</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TokenDisplay;

