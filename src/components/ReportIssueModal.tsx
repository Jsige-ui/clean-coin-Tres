
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from 'lucide-react';
import { toast } from "sonner";

const ReportIssueModal = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission with delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Issue reported successfully!", {
        description: "Your report has been recorded on the blockchain and you've earned 10 CleanCoins!",
      });
      // Close dialog by simulating escape key press
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    }, 1500);
  };
  
  return (
    <>
      <DialogHeader>
        <DialogTitle>Report a Waste Management Issue</DialogTitle>
        <DialogDescription>
          Help keep our community clean by reporting waste management issues. You'll earn CleanCoins for valid reports!
        </DialogDescription>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Issue Title</Label>
          <Input id="title" placeholder="Briefly describe the issue" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Detailed Description</Label>
          <Textarea
            id="description"
            placeholder="Provide more details about the issue..."
            className="min-h-[100px]"
            required
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select required>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="garbage">Garbage</SelectItem>
                <SelectItem value="recycling">Recycling</SelectItem>
                <SelectItem value="hazardous">Hazardous Waste</SelectItem>
                <SelectItem value="green">Green Waste</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="Address or landmark" required />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="image">Upload Image (Optional)</Label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className={`border-2 border-dashed rounded-lg p-4 text-center ${image ? 'border-primary' : 'border-border'}`}>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <Label htmlFor="image" className="cursor-pointer flex flex-col items-center">
                  <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                  <span className="text-sm text-muted-foreground">
                    {image ? "Change image" : "Upload image"}
                  </span>
                </Label>
              </div>
            </div>
            {image && (
              <div className="relative h-32 rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt="Preview"
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="outline" onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Report"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default ReportIssueModal;
