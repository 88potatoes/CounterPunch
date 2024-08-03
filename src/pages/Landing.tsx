import { LandingHeader } from "@/components/LandingHeader";
import { Card } from "@/components/ui/card";

export default function Landing() {
  return (
    <div className="container mx-auto px-4 py-4">
      <LandingHeader
        title="Count Punches The Easy Way"
        subtitle="The Future of Boxing"
      />
      <Card className="border-4">
        <video autoPlay muted loop>
          <source src="LandingVideo.mp4" type="video/mp4" />
        </video>
      </Card>
    </div>
  );
}
