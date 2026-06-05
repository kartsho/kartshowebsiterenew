const FeatureComparisonModal = ({
  plans,
}) => {
  return (
    <div
      className="
      overflow-x-auto

      rounded-[32px]

      bg-white/70

      p-8
    "
    >
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-4">
              Features
            </th>

            {plans.map((plan) => (
              <th
                key={plan.title}
                className="p-4"
              >
                {plan.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {plans[0]?.features?.map(
            (
              feature,
              index
            ) => (
              <tr key={index}>
                <td className="p-4">
                  {feature}
                </td>

                {plans.map(
                  (plan) => (
                    <td
                      key={
                        plan.title
                      }
                      className="p-4 text-center"
                    >
                      {plan.features.includes(
                        feature
                      )
                        ? "✓"
                        : "-"}
                    </td>
                  )
                )}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FeatureComparisonModal;
