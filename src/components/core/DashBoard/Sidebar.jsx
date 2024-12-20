import { useState } from "react"
import { VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { sidebarLinks } from "../../../data/dashboard-links"
import { logout } from "../../../services/operations/authAPI"
import ConfirmationModal from "../../../components/Common/ConfirmationalModel"
import SidebarLink from "./SidebarLink"
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";



export default function Sidebar() {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  )
  const { loading: authLoading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // to keep track of confirmation modal
  const [confirmationModal, setConfirmationModal] = useState(null)

  // State to track sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  if (profileLoading || authLoading) {
    return (
      <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-800 bg-richblack-800">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <>
      {/* Toggle Button for Menu on the Right Side */}
      <button 
        className="fixed top-[5.4rem] pr-8 right-4 p-2 text-white z-30 md:hidden" 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
         <TbLayoutSidebarRightExpandFilled size={35} />
      </button>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div 
        className={`fixed md:relative z-30 h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10 transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:flex`}
      >
        {/* Close Button for Mobile View */}
        <button 
          className="md:hidden p-2 text-white self-end mr-4 mb-4"
          onClick={() => setIsSidebarOpen(false)}
        >
          ✕
        </button>

        <div className="flex flex-col text-white">
          {sidebarLinks.map((link) => {
            if (link.type && user?.accountType !== link.type) return null
            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon} />
            )
          })}
        </div>
        <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-600" />
        <div className="flex flex-col">
          <SidebarLink
            link={{ name: "Settings", path: "/dashboard/settings" }}
            iconName="VscSettingsGear"
          />
          <button
            onClick={() =>
              setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out of your account.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
            className="px-8 py-2 text-sm font-medium text-richblack-200"
          >
            <div className="flex items-center gap-x-2">
              <VscSignOut className="text-lg" />
              <span>Logout</span>
            </div>
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}
