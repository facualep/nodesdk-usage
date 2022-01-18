// Remove email blankspaces & convert to lowercase
export function normalizeEmail(email: string) {
  return email.replace(/\s+/g, '').toLowerCase()
}
