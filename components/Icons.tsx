
import React from 'react';

export const IconWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="flex-shrink-0 w-6 h-6">{children}</div>
);

export const PinIcon: React.FC = () => <IconWrapper><i className="fas fa-map-marker-alt"></i></IconWrapper>;
export const BedIcon: React.FC = () => <IconWrapper><i className="fas fa-bed"></i></IconWrapper>;
export const YenIcon: React.FC = () => <IconWrapper><i className="fas fa-yen-sign"></i></IconWrapper>;
export const TrainIcon: React.FC = () => <IconWrapper><i className="fas fa-train"></i></IconWrapper>;
export const CameraIcon: React.FC = () => <IconWrapper><i className="fas fa-camera-retro text-purple-500"></i></IconWrapper>;
export const FoodIcon: React.FC = () => <IconWrapper><i className="fas fa-utensils text-amber-500"></i></IconWrapper>;
export const SakeIcon: React.FC = () => <IconWrapper><i className="fas fa-sake-bottle"></i></IconWrapper>;
export const OnsenIcon: React.FC = () => <IconWrapper><i className="fas fa-hot-tub"></i></IconWrapper>;
export const PlumIcon: React.FC = () => <IconWrapper><i className="fas fa-fan"></i></IconWrapper>;
export const SweetIcon: React.FC = () => <IconWrapper><i className="fas fa-ice-cream"></i></IconWrapper>;
