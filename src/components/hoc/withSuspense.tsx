import React, { Suspense, ComponentType } from "react";

const withSuspense = <P extends object>(
  WrappedComponent: ComponentType<P>,
  fallback: React.ReactNode = <div>Loading...</div>
) => {
  return (props: P) => (
    <Suspense fallback={fallback}>
      <WrappedComponent {...props} />
    </Suspense>
  );
};

export default withSuspense;
