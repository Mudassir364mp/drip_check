/**
 * Mock Services for Razorpay and Cloudinary
 * These can be replaced with actual SDK integrations once credentials are provided.
 */

// Mock Cloudinary implementation
export const uploadImageMock = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Return a dummy image URL after a short delay
      resolve('https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80');
    }, 1000);
  });
};

// Mock Razorpay implementation
export const createOrderMock = async (amount: number, currency: string = 'INR'): Promise<{ id: string, amount: number, currency: string, status: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: `order_mock_${Math.random().toString(36).substring(7)}`,
        amount: amount * 100, // Amount in paise
        currency,
        status: 'created',
      });
    }, 500);
  });
};

export const verifyPaymentMock = async (orderId: string, paymentId: string, signature: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock successful verification
      resolve(true);
    }, 500);
  });
};
