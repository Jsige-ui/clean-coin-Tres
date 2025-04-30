
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recentTransactions } from '@/lib/mockData';

const BlockchainVisualizer = () => {
  const [nodes, setNodes] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create node layout on mount and when container resizes
  useEffect(() => {
    const createNodes = () => {
      if (!containerRef.current) return;
      const nodeCount = Math.min(6, recentTransactions.length);
      setNodes(Array.from({ length: nodeCount }, (_, i) => i));
    };
    
    createNodes();
    
    // Add resize listener
    const observer = new ResizeObserver(createNodes);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Blockchain Transactions</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-xs text-muted-foreground mb-4">
          All actions are transparent and immutable on the blockchain
        </div>
        
        <div ref={containerRef} className="relative h-32 md:h-40 mb-4 overflow-hidden">
          {/* Visualization of the blockchain */}
          <div className="absolute inset-0 flex items-center justify-center">
            {nodes.map((node, index) => {
              const tx = recentTransactions[index];
              // Calculate positions in a horizontal line
              const containerWidth = containerRef.current?.clientWidth || 300;
              const step = containerWidth / (nodes.length + 1);
              const xPos = step * (index + 1);
              
              return (
                <div key={index} className="absolute" style={{ left: `${xPos}px` }}>
                  {/* Links between nodes */}
                  {index < nodes.length - 1 && (
                    <div 
                      className="blockchain-link"
                      style={{ 
                        width: `${step - 14}px`,
                        left: '100%',
                      }}
                    />
                  )}
                  
                  {/* Node */}
                  <div 
                    className="blockchain-node hover:scale-110 transition-transform cursor-pointer"
                    title={`${tx.type} - ${tx.details}`}
                  >
                    <div className="text-xs">{index + 1}</div>
                    <div className="absolute -bottom-6 text-[10px] text-center w-14 text-muted-foreground overflow-hidden">
                      {tx.type.split(' ')[0]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="space-y-2 mt-2">
          {recentTransactions.slice(0, 3).map((tx) => (
            <div key={tx.id} className="flex items-center gap-2 text-xs">
              <div className="w-2 h-2 rounded-full bg-blockchain-600" />
              <div className="text-muted-foreground">{tx.timestamp.slice(5, 16)}</div>
              <div className="font-medium flex-1">{tx.type}</div>
              <div className="text-[10px] text-muted-foreground truncate max-w-[100px]">
                {tx.hash.slice(0, 10)}...
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BlockchainVisualizer;
