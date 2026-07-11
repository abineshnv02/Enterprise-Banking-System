from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsAdminForDeleteOnly(BasePermission):

    def has_permission(self, request, view):

        # Read operations
        if request.method in SAFE_METHODS:
            return True

        if not request.user.is_authenticated:
            return False

        groups = request.user.groups.values_list(
            "name",
            flat=True
        )

        # Admin has full access
        if "Admin" in groups:
            return True

        # Manager can create and update
        if request.method in ["POST", "PUT", "PATCH"] and "Manager" in groups:
            return True

        # Viewer has read-only access
        return False