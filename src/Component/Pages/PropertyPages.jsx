import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const propertyLabels = {
  "new-flats": "New Flats",
  "old-flats": "Old Used Flats",
  "plot-residential": "Plot - Residential",
  "plot-commercial": "Plot - Commercial",
  "new-villas": "Residential - New Villas",
  "old-buildings": "Residential - Old Buildings",
  "joint-venture": "Joint Venture",
  "old-villas": "Old Villas",
  "rental-lease": "Rental / Lease",
};

export default function PropertyPage() {
  const { propertyType } = useParams();
  const label = propertyLabels[propertyType] || "Properties";

  const [showModal, setShowModal] = useState(false);

  /* ------------------ SAMPLE PROPERTY DATA FOR EACH CATEGORY ---------------------- */
  const [newFlats, setNewFlats] = useState([
    {
      id: 1,
      title: "Luxury 2BHK Apartment",
      price: "₹48,00,000",
      location: "Anna Nagar, Chennai",
      img: "https://www.realestateschennai.co.in/WhatsApp%20Image%202023-09-03%20at%2010.46.35%20AM.jpg",
    },
    {
      id: 2,
      title: "Premium 3BHK Flat",
      price: "₹75,00,000",
      location: "Velachery, Chennai",
      img: "https://via.placeholder.com/350x200",
    },
    {
      id: 3,
      title: "Budget 1BHK Flat",
      price: "₹32,50,000",
      location: "Tambaram, Chennai",
      img: "https://via.placeholder.com/350x200",
    },
  ]);

  const [oldFlats, setOldFlats] = useState([
    {
      id: 4,
      title: "Old 2BHK Flat",
      price: "₹40,00,000",
      location: "Porur, Chennai",
      img: "https://via.placeholder.com/350x200",
    },
    {
      id: 5,
      title: "Used 3BHK Apartment",
      price: "₹60,00,000",
      location: "Thoraipakkam, Chennai",
      img: "https://via.placeholder.com/350x200",
    },
  ]);

  const [plotsResidential, setPlotsResidential] = useState([
    {
      id: 6,
      title: "1200 Sqft Residential Plot",
      price: "₹18,00,000",
      location: "Guduvanchery, Chennai",
      img: "https://via.placeholder.com/350x200",
    },
    {
      id: 7,
      title: "2400 Sqft Plot",
      price: "₹32,00,000",
      location: "Tambaram West, Chennai",
      img: "https://via.placeholder.com/350x200",
    },
  ]);

  const [plotsCommercial, setPlotsCommercial] = useState([
    {
      id: 8,
      title: "Commercial Plot 1800 Sqft",
      price: "₹45,00,000",
      location: "OMR Road, Chennai",
      img: "https://via.placeholder.com/350x200",
    },
  ]);

  const [newVillas, setNewVillas] = useState([
    {
      id: 9,
      title: "Brand New Luxury Villa",
      price: "₹1,50,00,000",
      location: "ECR, Chennai",
      img: "https://via.placeholder.com/350x200",
    },
  ]);

  const [oldVillas, setOldVillas] = useState([
    {
      id: 10,
      title: "Old Independent Villa",
      price: "₹85,00,000",
      location: "Kottivakkam, Chennai",
      img: "https://via.placeholder.com/350x200",
    },
  ]);

  const [oldBuildings, setOldBuildings] = useState([
    {
      id: 11,
      title: "Old Commercial Building",
      price: "₹2,50,00,000",
      location: "T Nagar, Chennai",
      img: "https://via.placeholder.com/350x200",
    },
  ]);

  const [rentalLease, setRentalLease] = useState([
    {
      id: 12,
      title: "Office Space for Rent",
      price: "₹45,000/month",
      location: "Adyar, Chennai",
      img: "https://via.placeholder.com/350x200",
    },
  ]);

  const [jointVenture, setJointVenture] = useState([
    {
      id: 13,
      title: "JV Land for Development",
      price: "On Request",
      location: "Avadi, Chennai",
      img: "https://via.placeholder.com/350x200",
    },
  ]);

  /* --------------------- SHOW POPUP FOR ALL CATEGORIES -------------------- */
  useEffect(() => {
    if (
      [
        "new-flats",
        "old-flats",
        "rental-lease",
        "plot-commercial",
        "plot-residential",
        "old-villas",
        "new-villas",
        "old-buildings",
        "joint-venture",
      ].includes(propertyType)
    ) {
      setShowModal(true);
    }
  }, [propertyType]);

  /* --------------------- LOAD FUNNELWORKZ SCRIPT --------------------- */
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.funnelworkz.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  /* --------------------- FORM MAPPING --------------------- */
  const getFormDetails = () => {
    switch (propertyType) {
      case "rental-lease":
        return {
          src: "https://link.funnelworkz.com/widget/form/3BRs6fSpWlYaNR9fY6SG",
          id: "inline-3BRs6fSpWlYaNR9fY6SG",
          title: "#7 RENTAL/LEASE",
        };
      case "plot-commercial":
        return {
          src: "https://link.funnelworkz.com/widget/form/HYTka2gakHTYPfybMkA5",
          id: "inline-HYTka2gakHTYPfybMkA5",
          title: "#5 COMMERCIAL-Plot",
        };
      case "plot-residential":
        return {
          src: "https://link.funnelworkz.com/widget/form/Q9iYhuXsfPMAEbVEZeCr",
          id: "inline-Q9iYhuXsfPMAEbVEZeCr",
          title: "Residential-Plot",
        };
      case "old-villas":
        return {
          src: "https://link.funnelworkz.com/widget/form/63BoxZrMonglLPzpI4AX",
          id: "inline-63BoxZrMonglLPzpI4AX",
          title: "#4 VILLA OLD",
        };
      case "new-villas":
        return {
          src: "https://link.funnelworkz.com/widget/form/GZhpFwVpuqgwcUgow4Mj",
          id: "inline-GZhpFwVpuqgwcUgow4Mj",
          title: "#3 VILLA NEW Residential",
        };
      case "old-buildings":
        return {
          src: "https://link.funnelworkz.com/widget/form/Ow5SSgYj0wkLYDAV8s0x",
          id: "inline-Ow5SSgYj0wkLYDAV8s0x",
          title: "Residential-Old Building",
        };
      case "joint-venture":
        return {
          src: "https://link.funnelworkz.com/widget/form/10YUR7NPqM9Hv6haPXA1",
          id: "inline-10YUR7NPqM9Hv6haPXA1",
          title: "Joint venture",
        };
      default:
        return {
          src: "https://link.funnelworkz.com/widget/form/jtE806a6Iqf8NNc9uKE3",
          id: "inline-jtE806a6Iqf8NNc9uKE3",
          title: "#2 FLAT OLD",
        };
    }
  };

  const formDetails = getFormDetails();

  /* --------------------- REUSABLE CARD UI --------------------- */
  const PropertyList = ({ items }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
      {items.map((p) => (
        <div key={p.id} className="border rounded-xl shadow-md overflow-hidden">
          <img src={p.img} alt={p.title} className="w-full h-100 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-1">{p.title}</h3>
            <p className="text-gray-600 mb-1">{p.location}</p>
            <p className="text-blue-600 font-semibold mb-3">{p.price}</p>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-700"
              onClick={() => setShowModal(true)}
            >
              Enquire Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-10 mt-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">{label}</h1>

      {propertyType === "new-flats" && <PropertyList items={newFlats} />}
      {propertyType === "old-flats" && <PropertyList items={oldFlats} />}
      {propertyType === "plot-residential" && <PropertyList items={plotsResidential} />}
      {propertyType === "plot-commercial" && <PropertyList items={plotsCommercial} />}
      {propertyType === "new-villas" && <PropertyList items={newVillas} />}
      {propertyType === "old-villas" && <PropertyList items={oldVillas} />}
      {propertyType === "old-buildings" && <PropertyList items={oldBuildings} />}
      {propertyType === "rental-lease" && <PropertyList items={rentalLease} />}
      {propertyType === "joint-venture" && <PropertyList items={jointVenture} />}

      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-auto">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg relative p-6 md:p-8">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-2xl"
            >
              &times;
            </button>

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Contact Us about {label}
            </h2>
            <p className="text-gray-600 mb-6">
              Fill out this form and our team will get back to you promptly.
            </p>

            <div className="w-full h-[450px] md:h-[550px] overflow-auto rounded-lg border border-gray-200 shadow-inner">
              <iframe
                src={formDetails.src}
                style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
                id={formDetails.id}
                title={formDetails.title}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-deactivation-type="neverDeactivate"
                data-form-name={formDetails.title}
                data-layout-iframe-id={formDetails.id}
                data-form-id={formDetails.id.split("inline-")[1]}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
