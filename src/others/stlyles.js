// others/styles.js

// Existing styles...
export const gradientLeft = {
    background: 'radial-gradient(circle at center, #2E1A47 0%, #00000F00 70%)',
    mixBlendMode: 'screen',
    opacity: '0.4',
  };
  
  export const gradientRight = {
    background: 'radial-gradient(circle at center, #3D2A5F 0%, #00040F00 70%)',
    mixBlendMode: 'screen',
    opacity: '0.3',
  };
  
  export const gradientText = {
    background: 'radial-gradient(circle, #33BBCF, #DEF9FA)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  };
  
  // 💡 New gradient specific to Billing component (or reuse if similar)
  export const gradientBilling = {
    background: 'radial-gradient(circle at center, #1c1c1c 0%, #00040F00 70%)',
    mixBlendMode: 'screen',
    opacity: '0.6',
  };
  