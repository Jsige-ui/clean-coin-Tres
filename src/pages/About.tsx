
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Landmark, Lock, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-12 md:py-24 bg-gradient-to-br from-eco-green-50 to-clean-blue-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About CleanCoin</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Decentralizing waste management through blockchain technology and community engagement
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg">Join Our Mission</Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                CleanCoin aims to transform urban waste management through blockchain technology, 
                creating transparent, efficient systems where communities can directly participate 
                in keeping their localities clean and sustainable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="bg-eco-green-100 p-2 rounded-md">
                    <Users className="h-5 w-5 text-eco-green-600" />
                  </div>
                  <div>
                    <CardTitle>Community-Driven Action</CardTitle>
                    <CardDescription>
                      Enabling local communities to report, vote on, and resolve waste management issues together.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our decentralized platform puts power back in the hands of residents, 
                    allowing them to collectively decide which issues need immediate attention.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="bg-clean-blue-100 p-2 rounded-md">
                    <Lock className="h-5 w-5 text-clean-blue-600" />
                  </div>
                  <div>
                    <CardTitle>Blockchain Transparency</CardTitle>
                    <CardDescription>
                      Leveraging blockchain for tamper-proof records of all actions and transactions.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every issue report, resolution, and token transaction is permanently recorded 
                    on the blockchain, ensuring full transparency and accountability.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="bg-amber-100 p-2 rounded-md">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <CardTitle>Incentive System</CardTitle>
                    <CardDescription>
                      Rewarding positive actions with CleanCoins that can be redeemed for real value.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Users earn tokens by reporting issues, participating in clean-up activities,
                    and engaging with the community, creating sustainable engagement.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-md">
                    <Landmark className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle>Government Integration</CardTitle>
                    <CardDescription>
                      Working with municipal authorities to integrate with existing systems.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We collaborate with local governments to ensure our platform complements
                    and enhances existing waste management infrastructure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
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

export default About;
