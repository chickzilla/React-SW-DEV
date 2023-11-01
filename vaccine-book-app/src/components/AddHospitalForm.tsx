import { TextField } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { dbConnect } from "@/db/dbConnect";
import Hospital from "@/db/model/Hospital";
import { revalidateTag } from "next/cache";

export default async function AddHospitalForm() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);

  const addHospital = async (AddForm: FormData) => {
    "use server";
    const name = AddForm.get("name");
    const address = AddForm.get("address");
    const district = AddForm.get("district");
    const province = AddForm.get("province");
    const postalcode = AddForm.get("postalcode");
    const tel = AddForm.get("tel");
    const picture = AddForm.get("picture");

    try {
      await dbConnect();
      const hospital = await Hospital.create({
        name: name,
        address: address,
        district: district,
        province: province,
        postalcode: postalcode,
        tel: tel,
        picture: picture,
      });
    } catch (err) {
      console.error(err);
    }
    revalidateTag("hospital");
  };

  return (
    <>
      {profile.data.role == "admin" ? (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-6 px-10 py-[20px] justify-center mb-[30px] w-[80vw] items-center flex flex-col">
          <div className="font-bold text-xl">NEW HOSPITAL</div>
          <form action={addHospital}>
            <TextField
              id="name"
              label="name"
              name="name"
              placeholder="Hospital name"
              required
              variant="outlined"
              className="w-[70vw]"
            />
            <div className="flex flex-row justify-between my-[30px]">
              <TextField
                id="address"
                label="address"
                name="address"
                placeholder="Address"
                required
                variant="outlined"
                className="w-[30vw]"
              />
              <TextField
                id="district"
                label="district"
                name="district"
                placeholder="District"
                required
                variant="outlined"
                className="w-[30vw]"
              />
            </div>
            <div className="flex flex-row justify-between my-[30px]">
              <TextField
                id="province"
                label="province"
                name="province"
                placeholder="Province"
                required
                variant="outlined"
                className="w-[40vw]"
              />
              <TextField
                id="postalcode"
                label="postalcode"
                name="postalcode"
                placeholder="Postal code"
                required
                variant="outlined"
                className="w-[20vw]"
              />
            </div>
            <div className="my-[30px]">
              <TextField
                id="tel"
                label="tel"
                name="tel"
                placeholder="phone"
                required
                variant="outlined"
                className="w-[60vw]"
              />
            </div>
            <TextField
              id="picture"
              label="picture"
              name="picture"
              placeholder="Picture URL"
              required
              variant="outlined"
              className="w-[60vw]"
            />
            <div className="my-[30px] w-full">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white rounded w-[80%] h-[50px]
                rounded"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}
