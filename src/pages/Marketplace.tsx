
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Package, Recycle, ShoppingBag } from "lucide-react";

const marketplaceItems = [
  {
    id: 1,
    title: "Premium Compost",
    description: "High-quality compost made from local organic waste. Perfect for gardens and plants.",
    price: 50,
    category: "Compost",
    icon: <Leaf className="h-5 w-5 text-green-500" />
  },
  {
    id: 2,
    title: "Recycled Products",
    description: "Everyday items made from recycled materials. Eco-friendly and sustainable.",
    price: 75,
    category: "Recycled",
    icon: <Recycle className="h-5 w-5 text-blue-500" />
  },
  {
    id: 3,
    title: "Local Business Vouchers",
    description: "Discounts at participating local businesses that support sustainable practices.",
    price: 100,
    category: "Vouchers",
    icon: <ShoppingBag className="h-5 w-5 text-purple-500" />
  },
  {
    id: 4,
    title: "Waste Collection Kit",
    description: "Professional kit for waste segregation and collection. Includes bags, gloves, and tools.",
    price: 150,
    category: "Equipment",
    icon: <Package className="h-5 w-5 text-amber-500" />
  }
];

const Marketplace = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">CleanCoin Marketplace</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Filter by:</span>
              <Button variant="outline" size="sm">All</Button>
              <Button variant="outline" size="sm">Compost</Button>
              <Button variant="outline" size="sm">Recycled</Button>
              <Button variant="outline" size="sm">Vouchers</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {marketplaceItems.map(item => (
              <Card key={item.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    {item.icon}
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Badge variant="outline" className="bg-muted">{item.category}</Badge>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-eco-green-400 to-clean-blue-600 flex items-center justify-center mr-1">
                      <span className="text-white font-bold text-xs">CC</span>
                    </div>
                    <span className="font-medium">{item.price}</span>
                  </div>
                  <Button size="sm">Redeem</Button>
                </CardFooter>
              </Card>
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

export default Marketplace;
