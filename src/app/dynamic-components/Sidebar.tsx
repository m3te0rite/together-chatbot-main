'use client';

type SidebarProps = {
  chats: { id: string; title: string }[];
  isOpen: boolean;
  onSelect: (id: string) => void;
  onNewChat: () => void;
};

const Sidebar = ({ chats, isOpen, onSelect, onNewChat }: SidebarProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl border-r z-50 p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Previous Chats</h2>
      <ul className="space-y-2">
        {chats.map((chat) => (
          <li key={chat.id}>
            <button
              onClick={() => onSelect(chat.id)}
              className="w-full text-left p-2 rounded hover:bg-gray-100"
            >
              {chat.title}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={onNewChat}
        className="mt-6 w-full rounded bg-blue-500 text-white py-2 hover:bg-blue-600"
      >
        + New Chat
      </button>
    </div>
  );
};

export default Sidebar;
