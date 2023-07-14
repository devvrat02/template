import "./styles.css";
import {
  HeaderSection,
  AppointmentSection,
  InfoSection,
  RatingSection,
  FeatureSection,
  AboutSection,
  FooterSection,
} from "./Sections";
// Breaked the website in chunks of section
export default function App() {
  return (
    <div className="App">
      <HeaderSection />
      <AppointmentSection />
      <InfoSection />
      <RatingSection />
      <FeatureSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}
