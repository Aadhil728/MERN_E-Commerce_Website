import React from "react";

const NewsletterBox = () => {
  const onSubmithandler = (e) => {
    e.preventdefault();
  };

  return (
    <div className="text-center py-10">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% OFF
      </p>
      <p className="text-gray-400 mt-3">
        Don’t miss out on exclusive deals and the latest updates. Sign up today
        and enjoy instant savings on your next purchase!"
      </p>

      <form
        onSubmit={onSubmithandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-[5px]"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none "
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 rounded-[0_5px_5px_0]"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
