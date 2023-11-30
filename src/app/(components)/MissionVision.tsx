import VStack from "./VStack";

export default function MissionVision() {
  return (
    <>
      <div className="flex items-center justify-center w-full px-4 py-8 bg-slate-800 text-slate-50">
        <div className="container grid lg:grid-cols-2">
          <VStack className="items-center justify-center gap-2">
            <h3 className="text-3xl font-bold text-center">Mission</h3>
            <div className="max-w-screen-sm italic text-center">
              &ldquo;To accelerate Individuals and businesses who dream to
              transition into fast changing and sustainable technology driven
              world&rdquo;
            </div>
          </VStack>
          <VStack className="items-center justify-center gap-2">
            <h3 className="text-3xl font-bold text-center">Vision</h3>
            <div className="max-w-screen-sm italic text-center">
              &ldquo;Everyone in the world has access to quality training and
              guidance on their technical/business journey.&rdquo;
            </div>
          </VStack>
        </div>
      </div>
      <div className="flex items-center justify-center w-full px-4 py-8 bg-slate-700 text-slate-50">
        <VStack className="container gap-8">
          <p className="text-center">
            Committed to guiding you on your journey towards IT excellence. We
            are Powered by intellect, Driven by Value
          </p>
          <div className="grid gap-8 lg:grid-cols-2 place-items-start">
            <VStack className="items-center justify-center gap-2">
              <h4 className="text-xl font-bold text-center">Values</h4>
              <VStack className="max-w-screen-sm gap-2 italic">
                <p>
                  We genuinely care about those who choose to accelerate their
                  careers or businesses with us.
                </p>
                <p>
                  We include everyone equally and celebrate diversity from all
                  backgrounds (including diverse career experiences).
                </p>
                <p>
                  We support each individual on their personal journey of
                  career/business development.
                </p>
                <p>
                  We harness flexible working and the power of technology to
                  meet online & outside normal working hours as needed.
                </p>
                <p>
                  We expedite practical experience by working on live projects.
                </p>
              </VStack>
            </VStack>
            <VStack className="items-center justify-center gap-2">
              <h4 className="text-xl font-bold text-center">
                You will also experience:
              </h4>
              <VStack className="max-w-screen-sm gap-2 italic">
                <p>New age learning session/process</p>
                <p>
                  Your own personal journey with a relatable roadmap on 1:1
                  mentoring basis
                </p>
                <p>
                  We help you build relationship with people you can lean on.
                </p>
                <p>Small classes to take care of everyone</p>
                <p>
                  As part of SkyLink community, you are allowed to attend our
                  summits free of charge
                </p>
              </VStack>
            </VStack>
          </div>
        </VStack>
      </div>
    </>
  );
}
