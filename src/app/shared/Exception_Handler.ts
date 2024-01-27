export function ExceptionHandler(target: any) {
    const fileName = target.name;
    const methods = Object.getOwnPropertyNames(target.prototype);
  
    methods.forEach((method) => {
      const descriptor = Object.getOwnPropertyDescriptor(
        target.prototype,
        method
      );
  
      if (descriptor && typeof descriptor.value === 'function') {
        const originalMethod = descriptor.value;
  
        descriptor.value = function (...args: any[]) {
          try {
            console.log(`${method} - ${fileName}`);
            return originalMethod.apply(this, args);
          } catch (error) {
            console.error(`${fileName} - Error in method ${method}:`, error);
          }
        };
  
        Object.defineProperty(target.prototype, method, descriptor);
      }
    });
  }
  