import { Feature } from '../../Components'
import feature1 from '../../Assets/img/jpg/multor-feature1.jpg'
import feature2 from '../../Assets/img/jpg/multor-feature2.jpg'
import feature3 from '../../Assets/img/jpg/multor-feature3.jpg'
// feature are decribed here 
function FeatureSection() {
  const feat = [{
    imgsrc: feature1,
    title: `Feature 1`,
    desc: `Talk about some of the details of your offer with a focus on the value people get back.`
  },
  {
    imgsrc: feature2,
    title: `Feature 2`,
    desc: `Is there a pain point that your service resolves? Tell visitors about it here.`
  },
  {
    imgsrc: feature3,
    title: `Feature 3`,
    desc: `Alternatively, you could use this section to address some frequently asked questions.`
  },
  ]
  return (
    <div className='w-11/12 sm:w-10/12  m-auto mt-20'>
      <div className='w-full flex flex-col sm:flex-row gap-5 items-center'>
        {feat.map(x =>
          <div className='w-10/12 sm:w-4/12 m-auto'>
            <Feature
              imgsrc={x.imgsrc}
              title={x.title}
              desc={x.desc}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default FeatureSection;
