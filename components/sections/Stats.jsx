"use client";
import { Fragment } from "react";
import { TbBooks, TbRefresh, TbTrendingUp } from "react-icons/tb";

const stats = [
  {
    icon: TbBooks,
    value: "2,800+",
    label: "Books published",
  },
  {
    icon: TbRefresh,
    value: "450+",
    label: "Authors published a <br/> second book with us",
  },
  {
    icon: TbTrendingUp,
    value: "20%",
    label: "Annual growth in <br/> royalty payout",
  },
];

const Stats = () => {
  return (
    <section className="bg-primary-50 py-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-y-5">
          {stats.map(({ icon: Icon, value, label }, idx) => (
            <Fragment key={idx}>
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-10">
                <div className="shrink-0">
                  <Icon
                    className="text-5xl text-neutral-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="md:ml-4 xl:ml-6 mt-3 md:mt-0">
                  <div className="text-4xl md:text-5xl font-bold text-slate-900">
                    {value}
                  </div>
                  <div
                    className="mt-2 text-base xl:text-lg leading-snug text-slate-600"
                    dangerouslySetInnerHTML={{ __html: label }}
                  />
                </div>
              </div>
              {idx < stats.length - 1 && (
                <div className="h-full w-0.5 mx-5 bg-radial from-primary via-transparent to-transparent" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
