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
