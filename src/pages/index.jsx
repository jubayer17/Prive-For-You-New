import Layout from "./Layout.jsx";

import BlogPost from "./BlogPost";

import Blogs from "./Blogs";

import Careers from "./Careers";

import FAQ from "./FAQ";

import GiftCards from "./GiftCards";

import Home from "./Home";

import Membership from "./Membership";

import OurStory from "./OurStory";

import Packages from "./Packages";

import Press from "./Press";

import PrivacyPolicy from "./PrivacyPolicy";

import ServiceDetail from "./ServiceDetail";

import Services from "./Services";

import Support from "./Support";

import Team from "./Team";

import TeamMemberProfile from "./TeamMemberProfile";

import TermsOfService from "./TermsOfService";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const PAGES = {
  BlogPost: BlogPost,

  Blogs: Blogs,

  Careers: Careers,

  FAQ: FAQ,

  GiftCards: GiftCards,

  Home: Home,

  Membership: Membership,

  OurStory: OurStory,

  Packages: Packages,

  Press: Press,

  PrivacyPolicy: PrivacyPolicy,

  ServiceDetail: ServiceDetail,

  Services: Services,

  Support: Support,

  Team: Team,

  TeamMemberProfile: TeamMemberProfile,

  TermsOfService: TermsOfService,
};

function _getCurrentPage(url) {
  if (url.endsWith("/")) {
    url = url.slice(0, -1);
  }
  let urlLastPart = url.split("/").pop();
  if (urlLastPart.includes("?")) {
    urlLastPart = urlLastPart.split("?")[0];
  }

  const pageName = Object.keys(PAGES).find(
    (page) => page.toLowerCase() === urlLastPart.toLowerCase()
  );
  return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
  const location = useLocation();
  const currentPage = _getCurrentPage(location.pathname);

  return (
    <Layout currentPageName={currentPage}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/BlogPost" element={<BlogPost />} />

        <Route path="/Blogs" element={<Blogs />} />

        <Route path="/Careers" element={<Careers />} />

        <Route path="/FAQ" element={<FAQ />} />

        <Route path="/GiftCards" element={<GiftCards />} />

        <Route path="/Home" element={<Home />} />

        <Route path="/Membership" element={<Membership />} />

        <Route path="/OurStory" element={<OurStory />} />

        <Route path="/Packages" element={<Packages />} />

        <Route path="/Press" element={<Press />} />

        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

        <Route path="/ServiceDetail" element={<ServiceDetail />} />

        <Route path="/Services" element={<Services />} />

        <Route path="/Support" element={<Support />} />

        <Route path="/Team" element={<Team />} />

        <Route path="/TeamMemberProfile" element={<TeamMemberProfile />} />

        <Route path="/TermsOfService" element={<TermsOfService />} />
      </Routes>
    </Layout>
  );
}

export default function Pages() {
  return (
    <Router>
      <PagesContent />
    </Router>
  );
}
