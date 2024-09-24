const Copyright = () => {
  return (
    <div className="bg-LightBackgroundColor dark:bg-DarkBackgroundColor">
      <div className="container pt-[110px] pb-[50px]">
        <ul className="flex flex-col justify-start gap-10 text-LightTextColor dark:text-DarkTextColor">
          <li>
            <h4 className="text-xl lg:text-4xl">Copyright Statement</h4>
            <p className="text-lg lg:text-xl">
              Copyright &copy;{" "}
              {Math.floor(Date.now() / 1000 / 60 / 60 / 24 / 365 + 1970) ===
              2024
                ? ""
                : "2024 -"}{" "}
              {Math.floor(Date.now() / 1000 / 60 / 60 / 24 / 365 + 1970)}. All
              rights reserved.
            </p>
          </li>
          <li>
            <h4 className="text-xl lg:text-4xl">Permissions</h4>
            <p className="text-lg lg:text-xl">
              Unauthorized use or reproduction of any material on this website
              is prohibited without written permission from DarkGen Web Agency.
            </p>
          </li>
          <li>
            <h4 className="text-xl lg:text-4xl">Trademark Notice</h4>
            <p className="text-lg lg:text-xl">
              DarkGen Web Agency is a trademark of Real Estate Webs
            </p>
          </li>
          <li>
            <h4 className="text-xl lg:text-4xl">Disclaimer</h4>
            <p className="text-lg lg:text-xl">
              DarkGen Web Agency makes no warranties, expressed or implied, as
              to the accuracy or completeness of the information contained
              herein.
            </p>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Copyright;
