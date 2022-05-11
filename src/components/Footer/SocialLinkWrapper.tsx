import { ReactNode } from 'react';

interface SocialLinkWrapperProps {
  children: ReactNode;
}

export function SocialLinkWrapper({ children }: SocialLinkWrapperProps) {
  return (
    <div className="border-[1px] border-white rounded-full p-1 text-xs hover:text-brand-magenta hover:border-brand-magenta transition-colors cursor-pointer">
      {children}
    </div>
  );
}
