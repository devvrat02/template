import { Rating } from "../../Components";
import Testimony1 from '../../Assets/img/jpg/multor-testimonial1.jpg'
import Testimony2 from '../../Assets/img/jpg/multor-testimonial2.jpg'
import { Stars } from "../../Assets/img/svg";

function RatingSection() {
  return (
    <div className="w-11/12 sm:w-10/12 m-auto flex flex-col sm:flex-row mb-4">
      <div className="w-10/12 sm:w-6/12">
        <div className="w-full sm:w-8/12 py-4">
          <Rating
            stars={() => <Stars />}
            comment={`Share a real testimonial that hits some of your benefits (but isn't too sales-y).`}
            img={Testimony1}
            name={`Real Name`}
            location={`location`}
          />
        </div>
      </div>
      <div className="w-full sm:w-6/12">
        <div className="w-full sm:w-8/12 py-4">
          <Rating
            stars={() => <Stars />}
            comment={`Include someone talking about how easy it was to sign up and participate.`}
            img={Testimony2}
            name={`Real Name`}
            location={`location`}
          />
        </div>
      </div>
    </div>
  );
}

export default RatingSection;
