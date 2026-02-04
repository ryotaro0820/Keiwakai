import type { Member } from '@/types/member';

type MembersProps = {
  members: Member[];
};

export default function Members({ members }: MembersProps) {
  return (
    <section id="members" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#0056b3] font-medium text-sm tracking-wider uppercase">Members</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            メンバー紹介
          </h2>
          <div className="mt-4 w-20 h-1 bg-[#0056b3] mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            医療DXを推進するデジタル推進局のメンバーをご紹介します。
          </p>
        </div>

        {/* Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Member Image */}
              <div className="aspect-square bg-gradient-to-br from-[#0056b3]/10 to-[#0056b3]/5 flex items-center justify-center">
                <div className="w-24 h-24 bg-[#0056b3]/20 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#0056b3]/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <p className="text-[#0056b3] text-sm font-medium mb-1">{member.position}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{member.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{member.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
