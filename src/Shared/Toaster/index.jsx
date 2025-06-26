import toast from "react-hot-toast";
import { FaCheck, FaXmark } from "react-icons/fa6";

class Toaster {
  static success(message) {
    toast.success(message, {
      position: "top-right",
      icon: <FaCheck color="#001093" />,
      style: {
        color: this.while,
        borderRadius: "10px",
        background: "#0CC042",
      },
    });
  }

  static error(message) {
    if (message !== "" && message !== undefined) {
      toast.error(message, {
        position: "top-right",
        icon: <FaXmark color="#001093" />,
        style: {
          color: "#333",
          borderRadius: "10px",
          background: "#F14C4C",
        },
      });
    }
  }

  static(message) {
    toast(message, { position: toast.POSITION.TOP_RIGHT });
  }

}

export default Toaster;
