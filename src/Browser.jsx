import React, { useState, useEffect } from "react";



function Browser() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [installPrompt, setInstallPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  const handleBeforeInstallPrompt = (event) => {
    event.preventDefault();
    setInstallPrompt(event);
    setShowInstallButton(true);
  };

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (installPrompt) {
      try {
        const result = await installPrompt.prompt();
        console.log(`Install prompt was: ${result.outcome}`);
      } catch (error) {
        console.error("Error when prompting to install:", error);
      } finally {
        setInstallPrompt(null);
        setShowInstallButton(false);
      }
    }
  };


  return (
    <div className="relative">
      {/* Calendar Button */}
      <button
        className="absolute top-3 right-4  text-white px-2 py-1 rounded"
        onClick={openModal}
      >
        <svg
          height="25px"
          width="25px"
          version="1.1"
          id="_x32_"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xml:space="preserve"
          fill="#1877F2"
        >
          <style type="text/css"></style>
          <g>
            <path
              class="st0"
              d="M511.878,247.973l-21.488,0.672l21.488-0.68c-2.168-69.219-31.732-131.348-77.876-175.949
		C387.882,27.377,324.93-0.004,256.13,0.004c-2.718,0-5.443,0.046-8.176,0.13h0.016C178.743,2.294,116.622,31.858,72.013,78.002
		C27.382,124.122,0,187.074,0,255.874c0,2.709,0.046,5.435,0.13,8.16c2.168,69.22,31.732,131.347,77.875,175.949
		c46.113,44.632,109.065,72.02,177.865,72.013c2.694,0,5.42-0.038,8.16-0.13c69.227-2.16,131.355-31.724,175.957-77.876
		c44.64-46.121,72.021-109.065,72.013-177.857C512,253.416,511.962,250.699,511.878,247.973z M102.921,107.894
		c19.64-20.29,43.274-36.647,69.67-47.891c-10.961,15.77-20.336,34.426-28.045,55.304H96.089
		C98.303,112.779,100.585,110.306,102.921,107.894z M75.692,142.664h60.112c-8.282,30.212-13.327,63.906-14.365,99.661H43.472
		C45.77,205.914,57.243,171.938,75.692,142.664z M75.647,369.344c-18.351-29.121-29.808-63.044-32.144-99.661h78.028
		c1.046,35.732,5.954,69.471,14.236,99.661H75.647z M107.898,409.083c-4.091-3.962-7.984-8.114-11.748-12.381h48.442
		c4.099,11.091,8.579,21.67,13.594,31.396c4.405,8.518,9.16,16.487,14.252,23.847C148.37,441.654,126.523,427.082,107.898,409.083z
		 M242.329,468.524c-5.931-0.374-11.809-0.946-17.603-1.801c-2.404-1.573-4.809-3.282-7.213-5.236
		c-16.381-13.313-31.778-35.831-43.694-64.784h68.51V468.524z M242.329,369.344h-78.15c-8.794-29.411-14.267-63.365-15.381-99.661
		h93.531V369.344z M242.329,242.325h-93.448c1.115-36.327,6.618-70.235,15.42-99.661h78.028V242.325z M242.329,115.306h-68.433
		c2.71-6.588,5.542-12.954,8.595-18.84c10.298-19.969,22.404-35.647,35.022-45.945c2.366-1.924,4.732-3.604,7.099-5.16
		c5.832-0.862,11.74-1.48,17.717-1.863V115.306z M436.369,142.664c18.351,29.128,29.8,63.044,32.136,99.661h-78.02
		c-1.046-35.732-5.954-69.471-14.236-99.661H436.369z M404.11,102.917c4.092,3.961,7.985,8.114,11.756,12.389h-48.441
		c-4.099-11.092-8.58-21.672-13.596-31.396c-4.412-8.527-9.167-16.496-14.267-23.847C363.63,70.353,385.484,84.918,404.11,102.917z
		 M269.687,43.476c5.924,0.374,11.801,0.954,17.587,1.802c2.412,1.58,4.824,3.282,7.229,5.244
		c16.381,13.32,31.778,35.823,43.686,64.784h-68.502V43.476z M269.687,142.664h78.15c8.794,29.411,14.267,63.364,15.381,99.661
		h-93.531V142.664z M269.687,269.683h93.448c-1.114,36.327-6.618,70.242-15.42,99.661h-78.028V269.683z M329.525,415.534
		c-10.297,19.976-22.412,35.655-35.022,45.953c-2.359,1.924-4.725,3.595-7.091,5.152c-5.832,0.863-11.74,1.481-17.725,1.862v-71.799
		h68.426C335.402,403.289,332.57,409.648,329.525,415.534z M409.087,404.106c-19.64,20.29-43.266,36.64-69.655,47.884
		c10.962-15.771,20.328-34.419,28.037-55.288h48.449C413.698,399.22,411.423,401.694,409.087,404.106z M436.308,369.344h-60.105
		c8.29-30.206,13.336-63.906,14.374-99.661h77.952C466.23,306.086,454.757,340.07,436.308,369.344z"
            />
          </g>
        </svg>
      </button>

      {showInstallButton && (
        <button
          className="absolute top-2 right-14  text-white px-2 py-1 rounded"
          onClick={handleInstallClick}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="1"
              d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
              fill="#1877F2"
            />
            <path
              d="M12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7L11.25 12.1893L9.53033 10.4697C9.23744 10.1768 8.76256 10.1768 8.46967 10.4697C8.17678 10.7626 8.17678 11.2374 8.46967 11.5303L11.4697 14.5303C11.6103 14.671 11.8011 14.75 12 14.75C12.1989 14.75 12.3897 14.671 12.5303 14.5303L15.5303 11.5303C15.8232 11.2374 15.8232 10.7626 15.5303 10.4697C15.2374 10.1768 14.7626 10.1768 14.4697 10.4697L12.75 12.1893V7Z"
              fill="#FFFFFF"
            />
            <path
              d="M8 16.25C7.58579 16.25 7.25 16.5858 7.25 17C7.25 17.4142 7.58579 17.75 8 17.75H16C16.4142 17.75 16.75 17.4142 16.75 17C16.75 16.5858 16.4142 16.25 16 16.25H8Z"
              fill="#FFFFFF"
            />
          </svg>
        </button>
      )}

      {/* Calendar Modal */}
      {showModal && (
        <div className="fixed inset-0 h-full  bg-[#18181a] flex items-center justify-center z-50">
          <div className="absolute inset-0  bg-[#18181a] opacity-50"></div>
          <div className="relative z-10 pt-6  h-full w-full rounded-lg">
            <iframe
              src="https://labs.perplexity.ai" // Replace with your calendar website URL
              title="Calendar"
              name="uniqueIframeName" // Set a unique name for the iframe
              width="100%"
              height="100%" // Adjust the height as needed
            ></iframe>
            <button
              className="absolute top-0  right-2 text-white px-2 py-0.4 rounded"
              onClick={closeModal}
            >
              <span className="text-red-500 flex font-semibold">X</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Browser;
