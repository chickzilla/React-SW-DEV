import HospitalCatalog from "@/components/HospitalCatalog";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// MOCK HOSPITAL
const mockResult = {
  success: true,
  count: 4,
  pagination: {},
  data: [
    {
      _id: "65202351a0fbfd41dc7903a3",
      name: "Chulalongkorn Hospital",
      address: "1873 Rama IV Rd",
      district: "Pathum Wan",
      province: "Bangkok",
      postalcode: "10330",
      tel: "026494000",
      picture:
        "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
      __v: 0,
      id: "65202351a0fbfd41dc7903a3",
    },
    {
      _id: "65202386a0fbfd41dc7903a6",
      name: "Rajavithi Hospital",
      address: "2 Phaya Thai Rd, Thung Phaya Thai",
      district: "Ratchathewi",
      province: "Bangkok",
      postalcode: "10400",
      tel: "022062900",
      picture:
        "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
      __v: 0,
      id: "65202386a0fbfd41dc7903a6",
    },
    {
      _id: "652023b3a0fbfd41dc7903a9",
      name: "Thammasat University Hospital",
      address: "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
      district: "hlong Luang",
      province: "Pathum Thani",
      postalcode: "12120",
      tel: "029269999",
      picture:
        "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
      __v: 0,
      id: "652023b3a0fbfd41dc7903a9",
    },
    {
      _id: "65427fdc191bb620d9ba0eae",
      name: "Vajira Hospital",
      address: "681 Samsen Road",
      district: "Dusit",
      province: "Bangkok",
      postalcode: "10300",
      tel: "02-244-3000",
      picture:
        "https://drive.google.com/uc?id=1YLciRsApgCzbozEZQpnu_5hz5g0HsIwP",
      __v: 0,
      id: "65427fdc191bb620d9ba0eae",
    },
  ],
};

describe("HospitalCatalog", () => {
  it("should have exact number of image", async () => {
    const hospitalCatalog = await HospitalCatalog({
      HospitalJson: mockResult,
    });

    render(hospitalCatalog);

    await waitFor(() => {
      const hospitalImage = screen.queryAllByRole("img");
      expect(hospitalImage.length).toBe(4);
    });
  });
});
