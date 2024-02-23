import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Experience the Difference",
  desc: "Our roofing services aren’t just professional, they’re personal. Our team isn’t just skilled, they’re friendly, polite, and always ready to lend a hand.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Professional Services with a Personal Touch",
      desc: "Our roofing services go beyond the usual professional standards. We believe in adding a personal touch to make our customers feel valued and appreciated.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Skilled and Friendly Team",
      desc: "Our team members are not just highly skilled in their work, but they also bring a friendly and polite demeanor to the job. They’re always ready to lend a hand and ensure your experience is pleasant.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Customer-Centric Approach",
      desc: "We prioritize our customers’ needs and satisfaction. Our team is always ready to go the extra mile to meet your expectations and provide a service that truly makes a difference.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Customer Satisfaction, Our Priority",
  desc: "Your satisfaction is our success. We’re committed to leaving no stone unturned until you’re fully satisfied with our work.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Your Satisfaction, Our Success",
      desc: "We believe that our success is directly tied to your satisfaction. We strive to exceed your expectations in every project we undertake.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Commitment to Excellence",
      desc: "We are committed to delivering high-quality work and won’t rest until you’re fully satisfied with the results.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Attention to Detail",
      desc: "We leave no stone unturned when it comes to your project. Every detail is important to us, ensuring that the final result meets your highest standards.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
