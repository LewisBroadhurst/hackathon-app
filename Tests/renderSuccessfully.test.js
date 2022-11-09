// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import AdminMembers from '../src/Components/AdminSpecific/AdminMembers';
// import AdminOrganisations from '../src/Components/AdminSpecific/AdminOrganisations';
// import AdminStats from '../src/Components/AdminSpecific/AdminStats';
// import AdminVenues from '../src/Components/AdminSpecific/AdminVenues';
// import RegisterSteps from '../src/Components/CommericalRegistration/RegisterSteps';
// import EventCard from '../src/Components/EventCards/EventCard';
// import EventBanner from '../src/Components/EventSpecific/EventBanner';
// import EventMain from '../src/Components/EventSpecific/EventMain';
// import GroupBanner from '../src/Components/GroupOverviewSpecific/GroupBanner';
// import Header from '../src/Components/Header/Header';
// import GroupMembersCard from '../src/Components/MemberCards/GroupMembersCard';
// import MemberCardAdmin from '../src/Components/MemberCards/MemberCardAdmin';
// import MemberCardSmall from '../src/Components/MemberCards/MemberCardSmall';
// import OrgAdminCard from '../src/Components/OrganisationCards/OrgAdminCard';
// import CommunityPost from '../src/Components/SocialPosts/CommunityPost';
// import PollPost from '../src/Components/SocialPosts/PollPost';
// import EventTablet from '../src/Components/Tablets/EventTablet';
// import GroupDetailsTablet from '../src/Components/Tablets/GroupDetailsTablet';
// import PromoVenueTablet from '../src/Components/Tablets/PromoVenueTablet';
// import AdminVenueCard from '../src/Components/VenueCards/AdminVenueCard';
// import VenueBanner from '../src/Components/VenueSpecific/VenueBanner';
// import VenueCarousel from '../src/Components/VenueSpecific/VenueCarousel';
// import VenueMain from '../src/Components/VenueSpecific/VenueMain';
// import Step1 from '../src/Components/CommericalRegistration/Steps/Step1';
// import Step2 from '../src/Components/CommericalRegistration/Steps/Step2';
// import Step3 from '../src/Components/CommericalRegistration/Steps/Step3';
// import Step4 from '../src/Components/CommericalRegistration/Steps/Step4';
// import Footer from '../src/Components/Footer/Footer';
// import GroupCommunity from '../src/Components/GroupOverviewSpecific/GroupCommunity';
// import { BrowserRouter } from 'react-router-dom';
// import { CommercialRegistrationProvider } from './Contexts/CommericalRegistration.context';
// import {Elements} from '@stripe/react-stripe-js';
// import {stripePromise} from './Utils/Stripe.js';
// import {UserProvider} from './Contexts/User.context';


// 1. Renders the specified component
// 2. Tries to find the text "string" on the screen
// 3. Uses expect() to see if link element specified is in the document


// AdminSpecific Folder

// it("renders AdminMembers", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <AdminMembers />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );

//     const linkElement = screen.getByText(/Active Members/i)
    
//     expect(linkElement).toBeInTheDocument();
// });

// it("renders AdminOrganisation", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <AdminOrganisations />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );

//     const linkElement = screen.getByText(/Active Organisations/i)
    
//     expect(linkElement).toBeInTheDocument();
// });

// it("renders AdminStats", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <AdminStats />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );

//     const linkElement = screen.getByText(/Members/i)
    
//     expect(linkElement).toBeInTheDocument();
// });

// it("renders AdminVenues", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <AdminVenues />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );

//     const linkElement = screen.getByText(/Active Venues/i)
    
//     expect(linkElement).toBeInTheDocument();
// });


// // CommericalRegistration Folder

// it("renders RegisterSteps", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <RegisterSteps />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );

//     const linkElement = screen.getByText(/Entity/i)
    
//     expect(linkElement).toBeInTheDocument();
// });


// // CommericalRegistration -> Steps Folder

// it("renders Step1", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <Step1 />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );

//     const linkElement = screen.getByText(/Are you a venue or an organisation?/i)
    
//     expect(linkElement).toBeInTheDocument();
// });

// it("renders Step2", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <Step2 />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );

//     const linkElement = screen.getByText(/Do you accept the T's and C's?/i)
    
//     expect(linkElement).toBeInTheDocument();
// });

// it("renders Step3", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <Step3 />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );

//     const linkElement = screen.getByText(/Basic Plan/i)
    
//     expect(linkElement).toBeInTheDocument();
// });

// it("renders Step4", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <Step4 />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );
//     const linkElement = screen.getByText(/£9.99 per month/i)
    
//     expect(linkElement).toBeInTheDocument();
// });


// // EventCards Folder

// it("renders EventCard", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <EventCard />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );

//     const linkElement = screen.getByText(/Five Star Bowling/i)
    
//     expect(linkElement).toBeInTheDocument();
// });


// // EventSpecific Folder

// it("renders EventBanner", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <EventBanner />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );

//     const linkElement = screen.getByText(/September Quarterly/i);
    
//     expect(linkElement).toBeInTheDocument();
// });

// it("renders EventMain", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <EventMain />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );
//     const mainContents = screen.getAllByText(/We have decided/i);
    
//     expect(mainContents).toBeTruthy();
// });

// // Footer Folder

// it("renders Footer", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <Footer />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );
//     const linkElement = screen.getByText(/ACME Industries Ltd./i);
    
//     expect(linkElement).toBeInTheDocument();
// });

// // Forms Folder
// // Both contain APIs which is currently a problem

// // GMaps Folder
// // API based...

// // GroupOverviewSpecific Folder

// it("renders GroupBanner", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <GroupBanner />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );
//     const linkElement = screen.getByText(/Next event:/i);
    
//     expect(linkElement).toBeInTheDocument();
// });

// it("renders GroupMain", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <EventMain />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );
//     const postText = screen.getAllByText(/We have decided/i);
    
//     expect(postText.length).toBeGreaterThan(1);
// });



// it("renders Header", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <Header />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );
//     const linkElement = screen.getByText(/FUN@5/i)
//     // This will eventually use the prop testing method below
    
//     expect(linkElement).toBeInTheDocument();
// });

// // MemberCards

// it("renders GroupMembersCard", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <GroupMembersCard />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );
//     const linkElement = screen.getByText(/Group Members/i)
//     // This will eventually use the prop testing method below
    
//     expect(linkElement).toBeInTheDocument();
// });

// it("renders MemberCardAdmin", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <MemberCardAdmin />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );
//     const linkElement = screen.getByText(/Member actions/i)
//     // This will eventually use the prop testing method below
    
//     expect(linkElement).toBeInTheDocument();
// });

// it("renders MemberCardSmall", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <MemberCardSmall />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );
//     const linkElement = screen.getByText(/lewis1broadhurst@gmail.com/i)
//     // This will eventually use the prop testing method below
    
//     expect(linkElement).toBeInTheDocument();
// });


// // OrganisationCards Folder

// it("renders OrgAdminCard", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <OrgAdminCard />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );
//     const linkElement = screen.getByText(/Active since:/i)
//     // This will eventually use the prop testing method below
    
//     expect(linkElement).toBeInTheDocument();
// });

// // Posts Folder

// it("renders CommunityPost", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <CommunityPost />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );
//     const linkElement = screen.getByText(/Remember to cast/i)
//     // This will eventually use the prop testing method below
    
//     expect(linkElement).toBeInTheDocument();
// });

// it("renders PollPost", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <PollPost />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );
//     const linkElement = screen.getByText(/Cheeky Nandos/i)
//     // This will eventually use the prop testing method below
    
//     expect(linkElement).toBeInTheDocument();
// });


// // Tablets Folder

// it("renders EventTablet", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <EventTablet />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );
//     const linkElement = screen.getByText(/Upcoming Events/i)
//     // This will eventually use the prop testing method below
    
//     expect(linkElement).toBeInTheDocument();
// });

// it("renders GroupDetailsTablet", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <GroupDetailsTablet />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );
//     const linkElement = screen.getByText(/Welcome to the BNTA socials group!/i)
//     // This will eventually use the prop testing method below
    
//     expect(linkElement).toBeInTheDocument();
// });

// it("renders PromoVenuetablet", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <PromoVenueTablet />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );
//     const linkElement = screen.getByText(/Promoted Venues/i)
//     // This will eventually use the prop testing method below
    
//     expect(linkElement).toBeInTheDocument();
// });


// // VenueCards Folder

// it("renders AdminVenueCard", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <AdminVenueCard />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );
//     const linkElement = screen.getByText(/Hosted 11 events!/i)
//     // This will eventually use the prop testing method below
    
//     expect(linkElement).toBeInTheDocument();
// });


// // VenueSpecific Folder

// it("renders VenueBanner", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <VenueBanner />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );
//     const linkElement = screen.getByText(/Five Star Bowling Alley/i)
//     // This will eventually use the prop testing method below
    
//     expect(linkElement).toBeInTheDocument();
// });

// // it("renders VenueCarousel", () => {
// //     render(<VenueCarousel />);
// //     const linkElement = screen.getByText(//i)
// //     // This will eventually use the prop testing method below
    
// //     expect(linkElement).toBeInTheDocument();
// // });

// it("renders VenueMain", () => {
//     render(
//         <UserProvider>
//         <CommercialRegistrationProvider>
//         <Elements stripe={stripePromise}>
//         <BrowserRouter>
//         <VenueMain />
//         </BrowserRouter>
//         </Elements>
//         </CommercialRegistrationProvider>
//         </UserProvider>
//     );
//     const linkElement = screen.getByText(/Our four mashed-up crazy golf/i)
//     // This will eventually use the prop testing method below
    
//     expect(linkElement).toBeInTheDocument();
// });


// // To test a prop

// // it('Testing a prop', () => {
// //     render<(React.Component prop={prop} />);
// //     const propElement = screen.getByText(/Hello World/i);
// //     const propHeader = screen.getByRole("heading"/"paragraph"/"img")
// //     const propHeader = screen.getByRole("heading", { name: "My Header"})

// //     Remember that getBy vs. findAll
// //     If async... findBy NOT getBy

// //     expect(propElement).toBeInTheDocument();
// // })

// // it('Testing a prop', () => {
//     //     render<(React.Component prop={prop} />);
//     //     const propElement = screen.getAllByRole("heading");
//     //     expect(propElements.length).toBe(2);
// // })

// // it("Header renders", () => {
// //     render(<Header />);
// //     const linkElement = screen.getByText(/Five/i)
    
// //     expect(linkElement).toBeInTheDocument();
// // });

// // it("EventTablet renders", () => {
// //     render(<EventTablet />);
// //     const linkElement = screen.getByText(/Upcoming/i)
    
// //     expect(linkElement).toBeInTheDocument();
// // });