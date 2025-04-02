import { useParams, useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";
import { FaArrowLeft } from "react-icons/fa";
import lauraCutler from "../../images/lauraCutler.jpg";
import stockPhoto1 from "../../images/stockPhoto1.jpg";
import stockPhoto2 from "../../images/stockPhoto2.jpg";

const allProfiles = [
  {
    id: 5,
    name: "Keith Carney",
    phone: "555-123-4567",
    ministersTo: "Allen Rogers",
    address: "123 Temple St",
    birthday: "March 14, 1985",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
    interests: ["music", "reading", "technology"],
    hobby: "playing guitar",
    favoriteFood: "lasagna",
  },
  {
    id: 3,
    name: "Laura Cutler",
    phone: "555-234-5678",
    ministersTo: "Jennifer Rodriguez",
    address: "45 Peaceful Ln",
    birthday: "August 21, 1990",
    image: lauraCutler,
    interests: ["hiking", "photography", "volunteering"],
    hobby: "bird watching",
    favoriteFood: "sushi",
  },
  {
    id: 7,
    name: "Richard Ellis",
    phone: "555-345-6789",
    ministersTo: "Robert Stewart",
    address: "789 Elm St",
    birthday: "April 10, 1979",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
    interests: ["cycling", "technology", "gardening"],
    hobby: "woodworking",
    favoriteFood: "steak",
  },
  {
    id: 10,
    name: "Raymond Flores",
    phone: "555-456-7890",
    ministersTo: "Valerie Ingram",
    address: "22 Oak Blvd",
    birthday: "June 8, 1988",
    image: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=500&auto=format&fit=crop&q=60",
    interests: ["running", "travel", "languages"],
    hobby: "cooking",
    favoriteFood: "pho",
  },
  {
    id: 16,
    name: "Michael Gillespie",
    phone: "555-567-8901",
    ministersTo: "Steve Harvey",
    address: "991 Heritage Dr",
    birthday: "December 5, 1973",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60",
    interests: ["fishing", "reading", "sports"],
    hobby: "model trains",
    favoriteFood: "barbecue ribs",
  },
  {
    id: 21,
    name: "James Harris",
    phone: "555-678-9012",
    ministersTo: "Mikayla Williams",
    address: "610 Freedom Rd",
    birthday: "January 9, 1982",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60",
    interests: ["gaming", "puzzles", "investing"],
    hobby: "chess",
    favoriteFood: "tacos",
  },
  {
    id: 1,
    name: "Steve Harvey",
    phone: "555-789-0123",
    ministersTo: "Layla Summerhays",
    address: "703 Grace Ave",
    birthday: "July 15, 1975",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ce54a8856bbbe4d549c740b9edc8038d8ca364b",
    interests: ["comedy", "public speaking", "cars"],
    hobby: "stand-up comedy",
    favoriteFood: "fried chicken",
  },
  {
    id: 13,
    name: "Valerie Ingram",
    phone: "555-890-1234",
    ministersTo: "Keith Carney",
    address: "55 Maple Way",
    birthday: "October 3, 1992",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60",
    interests: ["fashion", "travel", "design"],
    hobby: "interior decorating",
    favoriteFood: "pad thai",
  },
  {
    id: 18,
    name: "Seth King",
    phone: "555-901-2345",
    ministersTo: "Thomas Shannon",
    address: "9 Cypress Loop",
    birthday: "February 18, 1987",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60",
    interests: ["technology", "philosophy", "cycling"],
    hobby: "coding side projects",
    favoriteFood: "burritos",
  },
  {
    id: 15,
    name: "Micahel Martin",
    phone: "555-012-3456",
    ministersTo: "Laura Cutler",
    address: "200 Temple View",
    birthday: "November 2, 1993",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60",
    interests: ["sports", "fitness", "reading"],
    hobby: "basketball",
    favoriteFood: "chicken alfredo",
  },
  {
    id: 11,
    name: "Jonathan McCoy",
    phone: "555-222-3333",
    ministersTo: "Seth King",
    address: "888 Inspire Rd",
    birthday: "April 22, 1991",
    image: "https://plus.unsplash.com/premium_photo-1722859288966-b00ef70df64b?w=500&auto=format&fit=crop&q=60",
    interests: ["mentoring", "podcasts", "faith studies"],
    hobby: "journaling",
    favoriteFood: "roast beef",
  },
  {
    id: 9,
    name: "Roberto Morrow",
    phone: "555-333-4444",
    ministersTo: "Christopher Scott",
    address: "11 Unity Ct",
    birthday: "May 6, 1986",
    image: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=500&auto=format&fit=crop&q=60",
    interests: ["soccer", "grilling", "dancing"],
    hobby: "barbecuing",
    favoriteFood: "empanadas",
  },
  {
    id: 19,
    name: "Jennifer Rodriguez",
    phone: "555-444-5555",
    ministersTo: "Raymond Flores",
    address: "60 Whispering Pines",
    birthday: "October 12, 1984",
    image: "https://images.unsplash.com/photo-1519895609939-d2a6491c1196?w=500&auto=format&fit=crop&q=60",
    interests: ["baking", "crafting", "nature"],
    hobby: "scrapbooking",
    favoriteFood: "enchiladas",
  },
  {
    id: 8,
    name: "Allen Rogers",
    phone: "555-555-6666",
    ministersTo: "Michael Gillespie",
    address: "180 Lightbearer Ave",
    birthday: "August 7, 1979",
    image: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?w=500&auto=format&fit=crop&q=60",
    interests: ["gardening", "tech", "woodwork"],
    hobby: "birdhouse building",
    favoriteFood: "chili",
  },
  {
    id: 20,
    name: "Christopher Scott",
    phone: "555-666-7777",
    ministersTo: "Richard Ellis",
    address: "330 Mission Circle",
    birthday: "March 30, 1983",
    image: "https://plus.unsplash.com/premium_photo-1722859288966-b00ef70df64b?w=500&auto=format&fit=crop&q=60",
    interests: ["teaching", "gaming", "science"],
    hobby: "tabletop games",
    favoriteFood: "pizza",
  },
  {
    id: 17,
    name: "Thomas Shannon",
    phone: "555-777-8888",
    ministersTo: "Jonathan McCoy",
    address: "721 Zion Hill Rd",
    birthday: "May 21, 1980",
    image: "https://images.unsplash.com/photo-1535643302794-19c3804b874b?w=500&auto=format&fit=crop&q=60",
    interests: ["history", "hiking", "volunteering"],
    hobby: "trail walking",
    favoriteFood: "meatloaf",
  },
  {
    id: 6,
    name: "Andrea Smith",
    phone: "555-888-9999",
    ministersTo: "Micahel Martin",
    address: "57 Olive Tree Ln",
    birthday: "June 2, 1994",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
    interests: ["design", "cooking", "fitness"],
    hobby: "yoga",
    favoriteFood: "caesar salad",
  },
  {
    id: 2,
    name: "Larry Smith",
    phone: "555-999-0000",
    ministersTo: "Andrea Smith",
    address: "402 Sunset Blvd",
    birthday: "July 12, 1977",
    image: stockPhoto2,
    interests: ["classic cars", "movies", "travel"],
    hobby: "car restoration",
    favoriteFood: "fried catfish",
  },
  {
    id: 12,
    name: "Robert Stewart",
    phone: "555-000-1111",
    ministersTo: "James Harris",
    address: "330 Evergreen Rd",
    birthday: "April 3, 1989",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=500&auto=format&fit=crop&q=60",
    interests: ["gardening", "books", "leadership"],
    hobby: "bonsai trees",
    favoriteFood: "grilled salmon",
  },
  {
    id: 4,
    name: "Layla Summerhays",
    phone: "555-111-2222",
    ministersTo: "Seth King",
    address: "101 Vineyard St",
    birthday: "September 19, 1995",
    image: stockPhoto1,
    interests: ["writing", "journaling", "coffee"],
    hobby: "blogging",
    favoriteFood: "ramen",
  },
  {
    id: 14,
    name: "Mikayla Williams",
    phone: "555-222-3333",
    ministersTo: "Jennifer Rodriguez",
    address: "120 Serenity Dr",
    birthday: "October 27, 1986",
    image: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60",
    interests: ["fashion", "mentorship", "fitness"],
    hobby: "pilates",
    favoriteFood: "grilled chicken",
  },
];

const Profile: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const profile = allProfiles.find((p) => p.id === parseInt(id ?? ""));

  if (!profile) {
    return <div className={styles.card}>Profile not found</div>;
  }

  return (
    <div className={styles.card}>
      <div
        onClick={() => navigate(-1)}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          marginBottom: "1rem",
          color: "#006184",
        }}
      >
        <FaArrowLeft style={{ marginRight: "0.5rem" }} />
        <span>Back</span>
      </div>

      <img src={profile.image} alt={profile.name} className={styles.image} />
      <h3>{profile.name}</h3>
      <p><strong>Contact:</strong> {profile.phone}</p>
      <p><strong>Ministers To:</strong> {profile.ministersTo}</p>
      <p><strong>Address:</strong> {profile.address}</p>
      <p><strong>Birthday:</strong> {profile.birthday}</p>
      <p><strong>Interests:</strong> {profile.interests.join(', ')}</p>
      <p><strong>Hobby:</strong> {profile.hobby}</p>
      <p><strong>Favorite Food:</strong> {profile.favoriteFood}</p>

    </div>
  );
};

export default Profile;
