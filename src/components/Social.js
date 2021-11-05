import MailchimpFormContainer from "./MailchimpFormContainer";
import RocketImage from '../img/rocket.jpg'

export default function Social() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto w-3/5 h-3/5"
              src={RocketImage}
              alt="Workflow"
            />
            <p className="mt-6 text-center text-3xl font-thin text-black">
              Be a part of our journey as we build from the ground up!
            </p>
            <p className="mt-5 text-center text-sm text-green-800">
              early access. seed investing. project updates.
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />

            
          </form>

          <MailchimpFormContainer />
        </div>
      </div>
    </>
  );
}
