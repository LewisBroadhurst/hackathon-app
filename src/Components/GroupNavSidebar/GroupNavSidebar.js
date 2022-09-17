import Plus from "../../Assets/plus.png";
import Settings from "../../Assets/settings.png";

const GroupNavSidebar = () => {
  return (
    <section className="hidden bg-cBlue200 md:flex">

        <div className="h-full flex flex-col justify-between items-center p-3">
          <div>
            <div className="w-10 bg-cYellow300 rounded-full p-3">
              <img src={Plus} alt="" className="" />
            </div>

            <div className="border-t-2 my-4 border-cGrey400"></div>

            <div className="w-10 bg-cYellow300 rounded-full p-2 text-center mb-4">LB</div>

            <div className="w-10 bg-cYellow300 rounded-full p-2 text-center mb-4">LB</div>

            <div className="w-10 bg-cYellow300 rounded-full p-2 text-center mb-4">LB</div>
          </div>
            

          <div className="w-8">
            <img src={Settings} alt="" className="border-t-2 pt-4 border-cGrey400 p-0.5" />
          </div>
        </div>

    </section>
  )
}

export default GroupNavSidebar;