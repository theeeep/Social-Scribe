import { TypewriterEffectSmoothDemo } from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { SparklesPreview } from "@/components/SparkleHeader";

export default function Home() {
	return (
		<div>
			<SparklesPreview />
			<TypewriterEffectSmoothDemo />
			<Navbar />
		</div>
	);
}
