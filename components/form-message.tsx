export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  return (
    <div className="flex w-full max-w-md flex-col gap-2 text-sm">
      {'success' in message && (
        <div className="text-foreground border-foreground border-l-2 px-4">
          {message.success}
        </div>
      )}
      {'error' in message && (
        <div className="border-red-text-red-400 border-l-2 px-4 text-red-400">
          {message.error}
        </div>
      )}
      {'message' in message && (
        <div className="text-main-blue border-l-2 px-4">{message.message}</div>
      )}
    </div>
  );
}
